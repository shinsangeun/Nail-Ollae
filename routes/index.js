var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/generic', function(req, res, next) {
  res.render('generic.html');
});

router.get('/elements', function(req, res, next) {
  res.render('elements.html');
});

module.exports = router;
