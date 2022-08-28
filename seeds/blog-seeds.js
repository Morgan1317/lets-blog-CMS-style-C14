const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Lets Keep up with the latest tech.',
    blog_content: 'Bootstrap is still the best css',
    user_id: 10
  },
  {
    title: 'Breaking news',
    blog_content: 'We are half way through this course',
    user_id: 8
  },
  {
    title: 'Here I go again',
    blog_content: 'Making blog posts',
    user_id: 1
  },
  {
    title: 'Testing, one, two',
    blog_content: 'Do I have your attention',
    user_id: 4
  },
  {
    title: 'Seeding',
    blog_content: 'Who knew I was so unimaginative with my seed blog posts',
    user_id: 7
  },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
