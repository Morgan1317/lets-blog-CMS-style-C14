const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Its true, I was there',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Woah that is super like random ',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Another comment bites the dust.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Que sera sera',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Whew. Close call.',
    user_id: 7,
    post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;