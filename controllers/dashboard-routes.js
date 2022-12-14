const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const auth = require('../utils/auth');

// get all blogs for dashboard
router.get('/', auth, (req, res) => {
  Blog.findAll({
    where: {
      user_id: req.session.user_id
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
      const blogs = dbBlogData.map(blog => blog.get({ plain: true }));
      res.render('dashboard', { blogs, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', auth, (req, res) => {
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
      if (dbBlogData) {
        const blog = dbBlogData.get({ plain: true });
        
        res.render('edit-blog', {
          blog,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
