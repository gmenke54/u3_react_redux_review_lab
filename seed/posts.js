const db = require('../db');
const Post = require('../models/post');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const posts = [
    {
      name: 'Las Vegas',
      url: 'https://sdvoice.info/wp-content/uploads/2017/10/las-vegas-strip-at-night-high-vantage-istock_000082066557_large-2.jpg',
      description:
        'Nestled in the Nevada desert, Las Vegas is a sprawling city of glitzy hotels, bustling casinos, wild nightclubs, and world-class restaurants. A lot of people dont like Vegas the party, the showiness, the expensive resorts, the fancy see and be seen atmosphere.',
      likes: 0
    },
    {
      name: 'Los Angeles',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.wired.com%2Fphotos%2F5b9c01161e60052cdc38bdef%2F191%3A100%2Fpass%2Flosangeles-947698310.jpg&f=1&nofb=1',
      description:
        'Known for its entertainment industry, miles of coastline, mountains, shopping, sports, ethnic diversity, and culture of creativity, L.A.s vibe ranges from upscale to hip to surf-casual and everything between, defying a label for the city as a whole.',
      likes: 0
    }
  ];

  await Post.insertMany(posts);
  console.log('Created posts!');
};

const run = async () => {
  await main();
  db.close();
};

run();
