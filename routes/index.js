const express = require('express');
const router = express.Router();
const app = express();

let entries = [];
app.locals.entries = entries;

/*
const db_config = require('../database/config');
const conn = db_config.init();
db_config.connect(conn);
*/

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

  res.render('./review/list.html');

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
  console.log("Req:", req.body);

  if(req.body.title === '' || req.body.body === ''){
    //TODO 수정 필요
    res.status(400).send("제목과 내용을 입력해 주세요.");
  }else{
    entries.push({
      title: req.body.title,
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      published: new Date()
    })
    res.redirect('./list');
  }
});

router.get('/review/modify', function(req, res, next) {
  res.render('./review/modify.html');
});

router.get('/myPage', function(req, res, next) {
  res.render('./myPage/myPage.html');
});

router.get('/login', function(req, res, next) {
  res.render('./login/login.html');
});

router.get('/common/menu', function(req, res, next) {
  res.render('./common/menu.html');
});

router.get('/common/banner', function(req, res, next) {
  res.render('./common/banner.html');
});

router.get('/common/header', function(req, res, next) {
  res.render('./common/header.html');
});

module.exports = router;
