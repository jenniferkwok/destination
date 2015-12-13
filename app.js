var express = require('express');
var app = express();
var mongoose = require('mongoose');
var db = require('./app/models/index.js');
var request = require('request');
var bodyParser = require('body-parser');

//CONFIG//
app.set('view engine', 'ejs');
app.use(express.static('public'));
// configure body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// mongoose.createConnection("mongodb://localhost/destination");

//ROUES//
app.get("/", function(req, res){
	db.Post.find().exec(function(err, posts){
		if (err){console.log("err! cannot get");}
	res.render('index', {posts: posts});
});
});

app.get("/api/posts", function(req, res){
	db.Post.find(function(err, posts){
		res.send(posts);
	});
});

app.post("/api/posts", function (req, res){
	var newPost={
		imgurl: req.body.imgurl,
		location: req.body.location,
		author:req.body.author
	};
	db.Post.create(newPost, function(err, post){
		if (err){console.log("err! cannot create");}
		res.json(post);
	});
 });

app.listen(process.env.PORT || 7000, function () {
  console.log('7000 GO GO GO');
});