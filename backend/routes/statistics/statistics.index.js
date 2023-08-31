const express = require("express");
const router = express.Router();
const controller = require("./statistics.controller");

router.post("/all", controller.all);

module.exports = router;