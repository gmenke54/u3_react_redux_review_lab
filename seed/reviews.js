const db = require('../db');
const Post = require('../models/post');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const LA = await Post.find({ name: 'Los Angeles' });
  const LV = await Post.find({ name: 'Las Vegas' });

  const reviews = [
    {
      name: 'Jerome',
      comments: 'I love Los Angeles',
      ratings: 5,
      post_id: LA[0]._id
    },
    {
      name: 'Grant',
      comments: 'Los Angeles was amazing',
      ratings: 4,
      post_id: LA[0]._id
    },
    {
      name: 'Charlie',
      comments: 'Just a beautiful classic',
      ratings: 4,
      post_id: LV[0]._id
    },
    {
      name: 'Jeremy',
      comments: 'Loved getting wild in Vegas totally',
      ratings: 5,
      post_id: LV[0]._id
    },
    {
      name: 'Michael',
      comments: 'Wish I had spent my money somewhere else',
      ratings: 1,
      post_id: LV[0]._id
    }
  ];

  await Review.insertMany(reviews);
  console.log('Created reviews!');
};

const run = async () => {
  await main();
  db.close();
};

run();
