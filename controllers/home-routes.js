const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

// get all existing blog posts if any