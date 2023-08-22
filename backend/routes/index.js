const express = require('express');
const router = express.Router();

const auth = require('./auth/auth.index');
const users = require('./users/users.index');

router.use('/auth', auth);
router.use('/users', users);

module.exports = router;