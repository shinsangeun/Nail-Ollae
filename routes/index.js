const express = require('express');
const router = express.Router();
const db_config = require('../database/config');
const conn = db_config.init();
db_config.connect(conn);

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
  res.render('./reservation/reserve.html');
});

router.get('/reservation?date=', function(req, res, next) {
  res.render('./reservation/reserveList.html');
});

router.get('/review/list', function(req, res, next) {
  res.render('./review/list.html', {list: rows});

  /* TODO mysql 연동
  let sql = "SELECT * FROM BOARD";
  conn.query(sql, function (err, rows, fields) {
      if(err) console.log('query is not...', err);
      else res.render('./review/list.html', {list: rows});
  })
  */
});

router.get('/review/write', function(req, res, next) {
  res.render('./review/write.html');
});

router.post('/review/write', function(req, res, next) {
  console.log("Req:", req.body.title);

  let name = req.body.name;
  let title = req.body.title;
  let content = req.body.content;
  let datas = [name, title, content];
  let category = req.body.category;

  res.render('./review/list.html');
});

router.get('/review/modify', function(req, res, next) {
  res.render('./review/modify.html');
});

module.exports = router;
