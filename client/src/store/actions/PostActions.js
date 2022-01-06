import { GetPosts, GetReviews } from '../../services/PostService';
import { GET_POSTS, GET_REVIEWS } from '../types';

export const LoadPosts = () => {
  // new format for this is required to return an object to state rather than a promise
  return async (dispatch) => {
    try {
      // axios call to get departments:
      const posts = await GetPosts();
      console.log(posts);
      // set state of the departments:
      dispatch({
        type: GET_POSTS,
        payload: posts
      });
    } catch (error) {
      // catch/throw error stops 1 error from breaking the entire program; instead, it only breaks that component
      throw error;
    }
  };
};

export const LoadReviews = (id) => {
  return async (dispatch) => {
    try {
      const reviews = await GetReviews(id);
      console.log(reviews);
      dispatch({
        type: GET_REVIEWS,
        payload: reviews
      });
    } catch (error) {
      throw error;
    }
  };
};
