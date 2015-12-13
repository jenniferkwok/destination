angular.module('destination')

.controller('postsController', ['$scope', 'apiService', function($scope, apiService) {

  apiService.index()
  .then(function(posts) {
    $scope.posts = posts;
  });

}]);