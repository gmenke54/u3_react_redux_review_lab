const {
  REVIEW_LOADING_TYPE,
  GET_REVIEWS,
  NEW_REVIEW,
  ADD_REVIEW
} = require('../types');

const iState = {
  reviews: [],
  reviewsLoading: '', // Should be type enum('Loading', 'Loaded', 'Inactive')
  newReview: {}
};

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case REVIEW_LOADING_TYPE:
      return { ...state, reviewsLoading: action.payload };
    case GET_REVIEWS:
      return { ...state, reviews: action.payload };
    case NEW_REVIEW:
      return { ...state, newReview: action.payload };
    case ADD_REVIEW:
      return { ...state, reviews: [...state.reviews, action.payload] };
    default:
      return { ...state };
  }
};

export default ReviewReducer;
