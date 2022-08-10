const express = require("express");
const registeruser = require("../controller/registerController");
const router = express.Router();

router.post("/register",registeruser.get_register);
router.post("/login",)
module.exports = router;