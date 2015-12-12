var mongoose = require("mongoose");
var Post = require("./post");
var User = require("./user");
mongoose.createConnection("mongodb://localhost/destination");

module.exports.Post = Post;
module.exports.User = User;