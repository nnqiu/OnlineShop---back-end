//注册 user表
exports.insertData = function (db, data, callback) {
  var collection = db.collection('user');
  var date = { "username": data.username, "password": data.password };
  collection.insert(date, function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    } 
    console.log(result);
    callback(result);
  });
}

//提交订单 add
exports.addData = function (db, data, callback) {
  var collection = db.collection('order');
  var date = { "person": data.person, "address": data.address, "tel": data.tel, "pay": data.pay };
  collection.insert(date, function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    console.log(result);
    callback(result);
  });
}