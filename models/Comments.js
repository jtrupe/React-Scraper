const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: String
});

const Comments = mongoose.model('Comments', commentSchema);

module.exports = Comments;