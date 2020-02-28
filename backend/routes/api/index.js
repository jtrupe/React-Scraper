const app = require('express').Router();
const articleRoute = require('./article');
const commentRoute = require('./comment');

app.use('/articles', articleRoute);
app.use('/comments', commentRoute);

module.exports = app;