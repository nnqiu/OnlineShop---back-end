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