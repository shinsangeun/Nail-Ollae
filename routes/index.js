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

router.get('/reservation', function(req, res, next) {
  res.render('elements.html');
});

router.get('/review/list', function(req, res, next) {
  res.render('./review/list.html');
});

router.get('/review/write', function(req, res, next) {
  res.render('./review/write.html');
});

router.get('/review/modify', function(req, res, next) {
  res.render('./review/modify.html');
});

module.exports = router;
