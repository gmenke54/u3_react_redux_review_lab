import {
  GetPosts,
  GetReviews,
  PostReview,
  PutPost,
  DelReview,
  GetPost
} from '../../services/PostService';
import {
  GET_POSTS,
  GET_REVIEWS,
  ADD_REVIEW,
  UPDATE_POST,
  DEL_REVIEW,
  GET_POST
} from '../types';

export const LoadPosts = () => {
  // new format for this is required to return an object to state rather than a promise
  return async (dispatch) => {
    // console.log('apple');
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
      // console.log(reviews);
      dispatch({
        type: GET_REVIEWS,
        payload: reviews
      });
    } catch (error) {
      throw error;
    }
  };
};

export const CreateReview = (rev) => {
  return async (dispatch) => {
    try {
      const newRev = await PostReview(rev);
      console.log('created the review');
      dispatch({
        type: ADD_REVIEW,
        payload: newRev
      });
    } catch (error) {
      throw error;
    }
  };
};

export const UpdatePost = (upd, id) => {
  return async (dispatch) => {
    try {
      const updatedPost = await PutPost(upd, id);
      dispatch({
        type: UPDATE_POST,
        payload: updatedPost
      });
    } catch (error) {
      throw error;
    }
  };
};

export const DeleteReview = (rev) => {
  return async (dispatch) => {
    try {
      await DelReview(rev._id);
      dispatch({
        type: DEL_REVIEW,
        payload: rev
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadPost = (id) => {
  return async (dispatch) => {
    try {
      // axios call to get departments:
      const post = await GetPost(id);
      // console.log(post);
      // set state of the departments:
      dispatch({
        type: GET_POST,
        payload: post
      });
    } catch (error) {
      // catch/throw error stops 1 error from breaking the entire program; instead, it only breaks that component
      throw error;
    }
  };
};
