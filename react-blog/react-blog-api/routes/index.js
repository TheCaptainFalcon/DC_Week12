const express = require("express"),
router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.send("this is the index")
});

module.exports = router;
