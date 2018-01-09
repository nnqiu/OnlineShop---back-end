var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/mydb';
var selectobj = require('./select')
var port = process.env.PORT || 8080;
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
  extended: true
}));

//设置本地跨域问题
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//应用级中间件
app.use(function(req, res, next) {
  console.log('服务器接收到一条请求时间为' + new Date().toLocaleTimeString());
  next();
});

function connect(currtft, cb) {
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    if (err) {
      console.log(err)
    } else {
      currtft(db, function (result) {
        cb(result)
        db.close()
      });
    }
  });
}

app.get('/login', function (req, res) {
  connect(selectobj.selectuserdb, function (result) {
    res.send(result)
  })
});


//端口监听
app.listen(port, function () {
  console.log('Server listening on http://localhost:' + port);
});