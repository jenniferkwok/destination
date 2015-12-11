var mongoose = require("mongoose");
var Post = require("./post");
var User = require("./user");
mongoose.connect("mongodb://localhost/destination");

module.exports.Post = Post;
module.exports.User = User;