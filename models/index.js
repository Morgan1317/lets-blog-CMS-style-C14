// import all models
const Blog = require('./Blog');
const User = require('./User');
const Vote = require('./Vote');


// create associations
User.hasMany(Blog, {
    foreignKey: 'user_id',
    // delete blogs associated with user if they are deleted
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    // if blog post gets deleted, delete the associated  comments
    onDelete: 'CASCADE'
});

module.exports = { User, Blog, Comment };
