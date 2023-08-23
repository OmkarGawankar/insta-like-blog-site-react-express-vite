const express = require('express');
const router = express.Router();

const auth = require('./auth/auth.index');
const users = require('./users/users.index');
const blogs = require('./blogs/blogs.index');

router.use('/auth', auth);
router.use('/users', users);
router.use('/blogs', blogs);

module.exports = router;