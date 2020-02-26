const db = require('../models');

module.exports = {
    createComment: (req, res) => {
        db.Comments.create({ comment: req.body.comment }).then(newComment => {
            res.json(newComment);
        })
    }
};