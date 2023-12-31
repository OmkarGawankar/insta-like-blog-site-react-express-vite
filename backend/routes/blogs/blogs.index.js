const router = require('express').Router();
const controller = require('./blogs.controller');

router.post('/all', controller.all);

router.post('/create', controller.create);

router.post('/read', controller.read);

router.post('/update', controller.update);

router.post('/delete', controller.delete);

router.post('/like', controller.like);

module.exports = router;