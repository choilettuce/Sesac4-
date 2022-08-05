const express =  require("express");
const visitor = require("../Controller/VisitorController.js");
const router = express.Router();

router.get("/", visitor.get_visitors);
router.post("/write", visitor.postcomment);
module.exports = router;