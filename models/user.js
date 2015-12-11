var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	firstName: String,
	lastName: String,
	passwordDigest: String
});

var User = mongoose.model('User', UserSchema);
module.exports = User;