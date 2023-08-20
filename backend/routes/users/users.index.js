const express = require("express");
const router = express.Router();
const controller = require("./users.controller");

router.post("/all", controller.all);

router.post("/create", controller.create);

router.post("/read", controller.read);

router.post("/update", controller.update);

router.post("/delete", controller.delete);


module.exports = router;