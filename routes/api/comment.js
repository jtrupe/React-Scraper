const app = require('express').Router();
const commentController = require('../../controllers/commentController')

app.route('/:articleId').post(commentController.createComment)


module.exports = app;
