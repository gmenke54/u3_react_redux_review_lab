const mongoose = require('mongoose');
const PostSchema = require('./post');
const ReviewSchema = require('./review');

const Post = mongoose.model('posts', PostSchema);
const Review = mongoose.model('reviews', ReviewSchema);

module.exports = {
  Post,
  Review
};
