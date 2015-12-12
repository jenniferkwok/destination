var app = angular.module('destination', ['ui.router']);

app.controller("MainCtrl", function ($scope) {
	$scope.message = "YO!"

	$scope.addPost = function() {
		console.log($scope.newPost);
	}
})

