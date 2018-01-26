exports.selectuserdb = function (db, data, callback) {
  var collection = db.collection('user');
  var whereStr = { "username": data.username,"password": data.password };
  collection.find(whereStr).toArray(function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
}

exports.resighuserdb = function (db, data, callback) {
  var collection = db.collection('user');
  var whereStr = { "username": data };
  collection.find(whereStr).toArray(function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
}

exports.productdb = function (db, data, callback) {
  var collection = db.collection('product');
  collection.find().toArray(function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
}

exports.searchdb = function (db ,data, callback) {
  var collection = db.collection('product');
  var whereStr = { "productname": data };

  collection.find(whereStr).toArray(function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
}
