angular.module('destination')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('posts', {
      url: '/',
      templateUrl: '../components/posts/posts-view.html',
      controller: 'postsController'
    })

    .state('new', {
      url: '/new',
      templateUrl: '../components/post-form/post-form-view.html',
      controller: 'newPostsController'
    });

    // catchall
   $urlRouterProvider.otherwise('/');

}]);