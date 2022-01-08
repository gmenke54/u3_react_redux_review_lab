const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));

router.get('/posts', controllers.getAllPosts);

router.get('/reviews', controllers.getAllReviews);

router.post('/reviews', controllers.createReviews);

router.put('/posts/details/:_id', controllers.updatePost);

router.get('/reviews/:post_id', controllers.getReviewsbyPost);

router.get('/posts/details/:_id', controllers.getPostById);

router.delete('/reviews/details/:_id', controllers.deleteReview);

module.exports = router;
