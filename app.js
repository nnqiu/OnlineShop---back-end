var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/mydb';
var selectobj = require('./select')
var insertobj = require('./insert')
var updateobj = require('./update')
var deleteobj = require('./delete')

var port = process.env.PORT || 8080;
var bodyparser = require('body-parser');
var http = require('http');

app.use(bodyparser.urlencoded({
  extended: true
}));

http.createServer(app).listen(8080);

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

//连接数据库
function connect(currtft, data, cb) {
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    if (err) {
      console.log(err)
    } else {
      currtft(db, data, function (result) {
        cb(result)
        db.close()
      });
    }
  });
} 

//登录接口
app.get('/login', function (req, res) {
  connect(selectobj.selectuserdb, {}, function (result) {
    res.send(result)
  })
});

//注册接口 先查后加
app.get('/signin', function (req, res) {
  connect(selectobj.resighuserdb, req.query.username , function (result) {
    if (result == '') {
      console.log('空')
      connect(insertobj.insertData, { "username": req.query.username, "password": req.query.password}, function (result) {
        // res.send('you are the new') //用户不存在
        res.send(result);
      })
      return
    } else {
      res.send(result) //用户存在
    }
    return
  })
});

//全部商品查询接口
app.get('/product',function (req, res) {
  connect(selectobj.productdb, {},function (result) {
    res.send(result)
  })
})

//商品查询接口
app.get('/search',function (req,res) {
  connect(selectobj.searchdb, req.query.productName,function (result) {
    res.send(result);
  })
})

//提交订单
app.get('/add', function (req, res) {
  connect(insertobj.addData, { "person": req.query.person, "address": req.query.address, "tel": req.query.tel, "pay": req.query.pay }, function (result) {
    res.send(result);
  })
})


//端口监听
// app.listen(port, function () {
//   console.log('Server listening on http://localhost:' + port);
// });

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mydb') //连接本地数据库