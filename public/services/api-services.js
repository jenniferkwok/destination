angular.module('destination')

.factory('apiService', ['$http', function($http) {
  return {
    index: function() {
      return $http.get('/api/posts')
      .then(function(response) {
        var posts = response.data;
        console.log('posts:',posts)
        return posts
      });
    },
    create: function(post) {
      $http.post('/api/posts', post);
    }
  }
}]);