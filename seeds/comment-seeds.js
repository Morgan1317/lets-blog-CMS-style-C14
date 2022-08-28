const { Comment } = require('../models');

const CommentData = [
  {
    comment_text: 'Its true, I was there',
    user_id: 1,
    blog_id: 1
  },
  {
    comment_text: 'Woah that is super like random ',
    user_id: 2,
    blog_id: 2
  },
  {
    comment_text: 'Another comment bites the dust.',
    user_id: 3,
    blog_id: 4
  },
  {
    comment_text: 'Que sera sera',
    user_id: 4,
    blog_id: 4
  },
  {
    comment_text: 'Whew. Close call.',
    user_id: 5,
    blog_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(CommentData);

module.exports = seedComments;