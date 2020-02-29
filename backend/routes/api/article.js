const app = require('express').Router();
const articleController = require('../../controllers/articleController.js')

app.route('/')
    .get(articleController.findAllArticles)
    .post(articleController.createArticle)
    .put(articleController.saveArticle)
    .delete();

app.route('/saved').get(articleController.findSavedArticles);

app.route('/:articleId')
    .get(articleController.findOneWhereUnsaved)
    .put(articleController.saveArticle);



module.exports = app;
