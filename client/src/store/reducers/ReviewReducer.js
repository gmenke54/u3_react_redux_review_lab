const { REVIEW_LOADING_TYPE, GET_REVIEWS } = require('../types');

const iState = {
  reviews: [],
  reviewsLoading: '' // Should be type enum('Loading', 'Loaded', 'Inactive')
};

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case REVIEW_LOADING_TYPE:
      return { ...state, reviewsLoading: action.payload };
    case GET_REVIEWS:
      return { ...state, reviews: action.payload };
    default:
      return { ...state };
  }
};

export default ReviewReducer;
