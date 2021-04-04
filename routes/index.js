const express = require('express');
const router = express.Router();
const db_config = require('../db/config');
const conn = db_config.init();
db_config.connect(conn);
const getConnection = require('../db/connection');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index.html');
});

router.get('/elements', (req, res) => {
  res.render('elements.html');
});

router.get('/reservation', (req, res) => {
  res.render('./reservation/reserve.html');
});

router.get('/reservation/list', (req, res) => {
  res.render('./reservation/list.html');
});

router.post('/reservation/save', (req, res) => {
  let name = req.body.name;
  let date = req.body.date;
  let category = req.body.category;
  let time = req.body.time;

  if(date === '' || category === '' || time === ''){
    res.status(400).send("날짜, 시간, 시술을 선택해 주세요.");
  }else {
    let sql = "INSERT INTO reservation (reserveName, category, reserveDate, reserveTime, dateTime) VALUES (?, ?, ?, ?, now());";
    let params = [name, decodeURI(category), date, time];

    getConnection((conn) => {
      conn.query(sql, params,  (err, rows, fields) =>{
        if (err) {
          console.log('query is not...', err);
        } else {
          console.log("rows:", rows);
          console.log("typeof:", "/" + req.url.split('/')[1] + "/list");
          let url = '/' + req.url.split('/')[1] + '/list';

          res.redirect(url);
          res.render('./reservation/list.html');
        }
      });
      conn.release();
    })
  }
});

// TODO 특정 이름만 조회 할 수 있도록 추가
router.get('/reservation/list/data', (req, res) => {
  let sql = "SELECT * FROM reservation";

  getConnection((conn) => {
    conn.query(sql,  (err, rows, fields) => {
      if(err){
        console.log('query is not...', err);
      }else{
        res.send({data: rows});
      }
    })
    conn.release();
  })
});

router.get('/review/list', (req, res) => {
  res.render('./review/list.html');
});

router.get('/review/list/data', (req, res) => {
  let sql = "SELECT * FROM review";

  getConnection((conn) => {
    conn.query(sql, (err, rows, fields) => {
      if (err) {
        console.log('query is not...', err);
      } else {
        res.send({data: rows});
      }
    })
    conn.release();
  });

});

router.get('/review/write', (req, res) =>{
  res.render('./review/write.html');
});

router.post('/review/write', (req, res) => {
  console.log("Req:", req.body.date, req.body.data, req.body.category);

  if(req.body.title === '' || req.body.body === ''){
    res.status(400).send("제목과 내용을 입력해 주세요.");
  }else {
    let sql = "INSERT INTO review (title, name, message, image, date, category) VALUES (?, ?, ?, ?, ?, ?);";
    let params = [req.body.title, req.body.name, req.body.message, req.body.image, new Date(), ""];

    getConnection((conn) => {
      conn.query(sql, params,  (err, rows, fields) =>{
        if (err) {
          console.log('query is not...', err);
        } else {
          console.log("rows:", rows);
          res.render('./review/list.html', {list: rows});
        }
      })
      conn.release();
    });
  }
});

router.get('/review/view/:id', (req, res) => {
  res.render('./review/view.html');
});

router.get('/review/data/:id', (req, res) => {
  console.log("params2:", req.params.id.split('=')[1], req.query.id);
  let id = req.params.id.split('=')[1];

  // 특정 id 받아 오도록 수정
  let sql = "SELECT * FROM review where id =" + id;

  getConnection((conn) => {
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log('query is not...', err);
      } else {
        res.send({data: rows});
      }
    })
    conn.release();
  });
});

/* TODO 좋아요 페이지 id 파라미터 수정 필요 */
router.post('/review/:id/like', (req, res) => {
  console.log("param:", req.param.id);

  // 특정 id 받아 오도록 수정
  let sql = "UPDATE review SET likeCnt = likeCnt + 1 where id = 20";

  getConnection((conn) => {
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log('query is not...', err);
      } else {
        res.send({data: rows});
      }
    })
    conn.release();
  });
});

router.get('/review/modify', (req, res) => {
  res.render('./review/modify.html');
});

/* TODO 수정 필요 */
router.get('/review/modify/:id', (req, res) => {
  let id = req.params.id;
  console.log("id==>", id);

  let sql = "SELECT * FROM review where id=" + id;

  getConnection((conn) => {
    conn.query(sql, (err, rows, fields) => {
      if (err) {
        console.log('query is not...', err);
      } else {
        console.log("rows:", rows);
        res.send({data: rows});
        // res.redirect('/review/modify?id=' + id);
      }
    })
    conn.release();
  });

  // 후기 업데이트 구문
  /*
  let upTitle = req.body.updateTitle;
  let upContent = req.body.upContent;
  let id = req.params.id;
  let sql = "UPDATE review set title=?, content=? where id=?";
  let params = [upTitle, upContent];

  conn.query(sql, params, (err, rows)=> {
    console.log("rows:", rows);

    res.redirect('/review/modify?id=' + id);
  })
  // res.render('./review/modify.html');
  */
});

router.get('/myPage', (req, res) => {
  res.render('./myPage/myPage.html');
});

/* 적립금 조회 */
router.get('/myPage/balance', (req, res) => {
  let sql = "SELECT * FROM mypage";

  getConnection((conn) => {
    conn.query(sql,  (err, rows, fields) => {
      if(err){
        console.log('query is not...', err);
      }else{
        res.send({data: rows});
      }
    })
    conn.release();
  });
});

/* 예약 조회 */
router.get('/myPage/reservation', (req, res) => {
  let sql = "SELECT * FROM reservation";

  getConnection((conn) => {
    conn.query(sql, (err, rows, fields) => {
      if (err) {
        console.log('query is not...', err);
      } else {
        res.send({data: rows});
      }
    })
    conn.release();
  });
});

router.get('/login', (req, res) => {
  res.render('./login/login.html');
});

router.get('/common/menu', (req, res) => {
  res.render('./common/menu.html');
});

router.get('/common/banner', (req, res) => {
  res.render('./common/banner.html');
});

router.get('/common/header', (req, res) => {
  res.render('./common/header.html');
});

module.exports = router;
