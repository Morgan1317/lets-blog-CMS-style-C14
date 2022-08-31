const router = require('express').Router();
const auth = require('../utils/auth');
const { Blog, User, Comment } = require('../models');

// get all blog posts for homepage
router.get('/', (req, res) => {
  Blog.findAll({
    attributes: [
      'id',
      'blog_content',
      'title',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    // map data to get content
    .then(dbBlogData => {
      const blogs = dbBlogData.map(blog => blog.get({ plain: true }));
// render handlebar home page
      res.render('homepage', {
        blogs,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single blog post
router.get('/blogs/:id', auth, (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'blog_content',
      'title',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbBlogData => {
      if (!dbBlogData) {
        res.status(404).json({ message: 'No blog found with this id' });
        return;
      }

      const blog = dbBlogData.get({ plain: true });
// render page for single blog 
      res.render('one-blog', {
        blog,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
// render handlebar login page
  res.render('login');
});
// render the handlebar signup page
router.get('/signup', (req, res) => {
  res.render('signup');
})

module.exports = router;
