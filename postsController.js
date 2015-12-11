angular.module('destination', [])
  .controller('postsController', PostsController);

PostsController.$inject = ['$http'];

function PostsController($http){
  var self = this;
  self.all = [];
  self.addPost = addPost;
  self.newPost = {};
  self.getPosts = getPosts;
  self.deletePost = deletePost;

  getPosts();
  function getPosts(){
    $http
      .get('http://localhost:7000/posts')
      .then(function(response){
        self.all = response.data.posts;
    });
  }

  function addPost(){
    $http
      .post('http://localhost:7000/posts', self.newPost)
      .then(function(response){
        getPosts();
    });
    self.newPost = {};
  }

  function deletePost(post){
    $http
      .delete("http://localhost:7000/posts/" + post._id)
      .then(function(response){
        var index = self.all.indexOf(post);
        self.all.splice(index, 1);
      });
  }
}
