const express = require('express'),
router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('this is the user page');
});

module.exports = router;
