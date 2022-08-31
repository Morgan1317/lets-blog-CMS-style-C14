const router = require('express').Router();

// link to the route folders
const userRoutes = require('./user-routes.js');
const blogRoutes = require('./blog-routes.js');
const commentRoutes = require('./comment-routes.js');

//appropriate routes with its /handle
router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
