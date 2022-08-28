const { User } = require('../models');

const userdata = [
  {
    username: 'vegetableblouse',
    email: 'vegetableblouse@cbc.ca',
    password: 'password123'
  },
  {
    username: 'barredknockback',
    email: 'barredknockback@sogou.com',
    password: 'password123'
  },
  {
    username: 'gaudyablaze',
    email: 'gaudyablaze@last.fm',
    password: 'password123'
  },
  {
    username: 'shrivelsplosh',
    email: 'shrivelsplosh@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'consumefox',
    email: 'consumefox@imdb.com',
    password: 'password123'
  },
  {
    username: 'ecstaticambitious',
    email: 'ecstaticambitious@feedburner.com',
    password: 'password123'
  },
  {
    username: 'linkcomponent',
    email: 'linkcomponent@china.com.cn',
    password: 'password123'
  },
  {
    username: 'multipleperpetual',
    email: 'multipleperpetual@google.ru',
    password: 'password123'
  },
  {
    username: 'massassertive',
    email: 'massassertive@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
