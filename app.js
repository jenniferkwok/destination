var app = angular.module('destination', ['ui.router']);

app.controller("MainCtrl", function ($scope) {
	$scope.message = "YO!"

	$scope.addPost = function() {
		console.log($scope.newPost);
	}
})


var express = require('express');
var app = express();
var mongoose = require('mongoose');
var db = require('./models/index.js');
var request = require('request');
var bodyParser = require('body-parser');

//CONFIG//
app.set('view engine', 'ejs');
app.use(express.static('public'));

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