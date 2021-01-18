let express = require('express');
let router = express.Router();

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
});

router.get('/review/write', function(req, res, next) {
  res.render('./review/write.html');
});

router.post('/review/write/title=:title', function(req, res, next) {
  if(req.method === "POST"){
    req.on('data',function (data) {
        console.log("data:", data);

    })
  }
  let name = req.body.name;
  let title = req.body.title;
  let content = req.body.content;


  console.log("name:", name, title, content);
  res.render('./review/write/:title.html');
});

router.get('/review/modify', function(req, res, next) {
  res.render('./review/modify.html');
});

module.exports = router;
