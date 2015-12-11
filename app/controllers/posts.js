var Post = require('../models/post');

// GET
function getAll(request, response) {
  Post.find(function(error, posts) {
    if(error) response.json({message: 'Could not GET!'});
    response.json({posts: posts});
  });
}

// function postById(request, response, next, id) {
//   Post.findById(id, function(error, post) {
//     if (error) console.error('Could not update post b/c:', error);

//     request.post = post; // store post in request
//     next(); // callback to move onto next handler
//   });
// }

// NEW POST
function create(request, response) {
  // create a new post based of user data
  var post = new Post(request.body);

  // save the post
  post.save(function(error) {
    if (error) console.error('Not able to create post b/c:', error);

    response.json({message: 'post successfully created'});
  });
}

function index(request, response) {
  post.find(function(error, posts) {
    if (error) console.error('Could not retrieve posts b/c:', error);
    response.json(posts);
  });
}

function show(request, response) {
  response.json(request.post);
}

// function update(request, response) {
//   var data = request.body;
//   var post = request.post

//   Object.keys(data).forEach(function(key) {
//     post.set(key, data[key]); // set replaces the value of a field with the specified value
//   });

//   post.save(function(error) {
//     if (error) console.error('Could not update post b/c:', error);

//     response.json({message: 'post successfully updated'});
//   });
// }

function destroy(request, response) {
  Post.remove({ _id: request.params.post_id }, function(error) {
    if (error) console.error('Could not delete post b/c:', error);

    response.json({message: 'post successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  postById: postById,
  create: create,
  index: index,
  show: show,
  update: update,
  destroy: destroy
};