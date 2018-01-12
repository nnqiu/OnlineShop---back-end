// https://www.purina.cn
// //引入mongodb模块，获得客户端对象
// var MongoClient = require('mongodb').MongoClient;
// //连接字符串
// var DB_CONN_STR = 'mongodb://localhost:27017/mydb';
// //定义函数表达式，用于操作数据库并返回结果
// var findData = function (db, callback) {
//   //获得指定的集合 
//   var collection = db.collection('user');
//   //要删除数据的条件，_id>2的用户删除
//   var where = { _id: { "$gt": 2 } };
//   collection.remove(where, function (err, result) {
//     //如果存在错误
//     if (err) {
//       console.log('Error:' + err);
//       return;
//     }
//     //调用传入的回调方法，将操作结果返回
//     callback(result);
//   });
// }
// //使用客户端连接数据，并指定完成时的回调方法
// MongoClient.connect(DB_CONN_STR, function (err, db) {
//   console.log("连接成功！");
//   //执行插入数据操作，调用自定义方法
//   findData(db, function (result) {
//     //显示结果
//     console.log(result);
//     //关闭数据库
//     db.close();
//   });
// });

// //引入mongodb模块，获得客户端对象
// var MongoClient = require('mongodb').MongoClient;
// //连接字符串
// var DB_CONN_STR = 'mongodb://localhost:27017/mydb';

// //定义函数表达式，用于操作数据库并返回结果
// var insertData = function (db, callback) {
//   //获得指定的集合 
//   var collection = db.collection('order');
//   //插入数据
//   var data = {
//     "productname": '康多乐®软脆双拼成犬牛肉味犬粮', "productdetil": '“香软方颗粒”颗颗美味，质地软而弹，与酥脆的干颗粒混合入口，硬脆和软弹两种口感相得益彰，将美味和双重口感融为一体令爱犬爱不释', "stock": 256, "sale": 234, "price": 87, "img": 'gn-18' };
//   collection.insert(data, function (err, result) {
//     //如果存在错误
//     if (err) {
//       console.log('Error:' + err);
//       return;
//     }
//     //调用传入的回调方法，将操作结果返回
//     callback(result);
//   });
// }

// //使用客户端连接数据，并指定完成时的回调方法
// MongoClient.connect(DB_CONN_STR, function (err, db) {
//   console.log("连接成功！");
//   //执行插入数据操作，调用自定义方法
//   insertData(db, function (result) {
//     //显示结果
//     console.log(result);
//     //关闭数据库
//     db.close();
//   });
// });