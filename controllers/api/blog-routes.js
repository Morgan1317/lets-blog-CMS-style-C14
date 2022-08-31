const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const auth = require('../../utils/auth');

// get all blog post at /api/blogs
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
    .then(dbBlogData => res.json(dbBlogData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// get specific blog post via id using /api/blogs/:id
router.get('/:id', (req, res) => {
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
      res.json(dbBlogData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// add a blog post via api/blogs - making sure user is logged in with auth
router.post('/', auth, (req, res) => {

  Blog.create({
    title: req.body.title,
    blog_content: req.body.blog_content,
    user_id: req.session.user_id
  })
    .then(dbBlogData => res.json(dbBlogData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// edit blog post via its id api/blogs/:id, again insuring user is signed in
router.put('/:id', auth, (req, res) => {
  Blog.update(req.body,
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbBlogData => {
      if (!dbBlogData) {
        res.status(404).json({ message: 'No blog found with this id' });
        return;
      }
      res.json(dbBlogData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// allows user to delete blog posting via its id api/blogs/:id
router.delete('/:id', auth, (req, res) => {
  console.log('id', req.params.id);
  Blog.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbBlogData => {
      if (!dbBlogData) {
        res.status(404).json({ message: 'No blog found with this id' });
        return;
      }
      res.json(dbBlogData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
