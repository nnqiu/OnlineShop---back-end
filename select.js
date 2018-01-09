exports.selectuserdb = function (db, callback) {
    var collection = db.collection('user');
    var whereStr = { "username": 'test' };
    collection.find(whereStr).toArray(function (err, result) {
      if (err) {
        console.log('Error:' + err);
        return;
      }
      callback(result);
    });
}

