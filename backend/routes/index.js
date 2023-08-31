const express = require('express');
const router = express.Router();

const auth = require('./auth/auth.index');
const users = require('./users/users.index');
const blogs = require('./blogs/blogs.index');
const statistics = require('./statistics/statistics.index');

router.use('/auth', auth);
router.use('/users', users);
router.use('/blogs', blogs);
router.use('/statistics', statistics);

module.exports = router;