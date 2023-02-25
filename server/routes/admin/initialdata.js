const express = require("express");
const { initialdata } = require("../../controller/admin/initialdata");
const { requireSignin, adminMiddleware } = require("../../middleware");
const router = express.Router();


router.post("/initialdata",requireSignin, initialdata);

module.exports = router;
