angular.module('destination')

.controller('newPostsController', ['$scope', 'apiService', '$state', function($scope, apiService, $state) {

  $scope.createPost = function() {
    apiService.create($scope.post);
    $state.go('posts');
  }

}]);