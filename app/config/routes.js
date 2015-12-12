var express = require('express');
var apiRouter = express.Router();
var post = require('../models/post');
var postsController = require('../controllers/posts-controller'); // bring in controllers

// apiRouter.param('post_id', postsController.postById);

// configure router middleware
apiRouter.route('/posts')

  .post(postsController.create)

  .get(postsController.index);

apiRouter.route('/posts/:post_id')

  .get(postsController.show)

  // .patch(postsController.update)

  // .delete(postsController.destroy);

module.exports = apiRouter;