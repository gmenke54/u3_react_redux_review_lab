const Post = require('../models/post');
const Review = require('../models/review');
const { process_params } = require('express/lib/router');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createReviews = async (req, res) => {
  try {
    const review = await new Review(req.body);
    await review.save();
    return res.status(201).json({
      review
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getReviewsbyPost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const reviews = await Review.find({ post_id });
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePost = async (req, res) => {
  try {
    const { _id } = req.params;
    await Post.findByIdAndUpdate(_id, req.body, { new: true }, (err, team) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!team) {
        res.status(500).send('Post not found!');
      }
      return res.status(200).json(team);
    });
  } catch (error) {}
};

// const deleteReview = async (req, res) => {
//   try {
//     const { _id } = req.params;
//     const deleted = await Review.findByIdAndDelete(_id);
//     if (deleted) {
//       return res.status(200).send('Review deleted');
//     }
//     throw new Error('Review not found');
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };

module.exports = {
  getAllPosts,
  createReviews,
  getAllReviews,
  updatePost,
  getReviewsbyPost
  // deleteReview
};
