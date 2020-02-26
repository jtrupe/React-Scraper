const app = require('express').Router();
const commentController = require('../../controllers/commentController.js')

app.route('/').post(commentController.createComment)

module.exports = app;