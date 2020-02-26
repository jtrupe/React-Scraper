const db = require('../models');
const scrape = require('../scripts/scrape')

module.exports = {
    createArticle: (req, res) => {
        scrape.then(scrapedResults => {
            // insert article array resolved by promise
            db.Articles.insertMany(scrapedResults).then(insertedArticles => {
                res.json(insertedArticles);
            })
        });
    },
    findAllArticles: (req, res) => {
        db.Articles.find().then(allArticles => {
            res.json(allArticles);
        })
    },
    findSavedArticles: (req, res) => {
        db.Articles.find({ isSaved: true }).then(savedArticles => {
            res.json(savedArticles);
        })
    },
    saveArticle: (req, res) => {
        db.Articles.updateOne(
            {
                _id : req.params.articleId
            },
            {
                isSaved: true
            }).then(savedArticle =>{
                res.json(savedArticle)
            })
    },
};