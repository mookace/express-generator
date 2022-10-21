var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", generated_by: "Mukesh" });
});

router.get("/test", function (req, res, next) {
  res.render("test", { bob: "one piece film red" });
});

module.exports = router;
