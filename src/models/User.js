var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

/* User Schema & Model */

var userSchema = new Schema({
	id: ObjectId,
	givenName: { type: String, required: '/PATH' },
	surname: { type: String, required: '/PATH' },
	email: { type: String, required: '/PATH', unique: true },
	password: { type: String, required: '/PATH' },
	saved: Array,
});

var findAllUsers = function(users){
    users = db.users.find();
    return users;
};

var addUser = function(givenName, surname, email, password, saved){
    var user = {
        givenNameName: givenName,
        surname: surname,
        email: email,
        password: password,
        saved: saved,
    };
    
    db.users.insert({ user });
};

module.exports.User = mongoose.model('User', userSchema);

module.exports.addUser = addUser;
module.exports.findAll = findAllUsers;
