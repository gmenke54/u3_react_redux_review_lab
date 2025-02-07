const {
  POST_LOADING_TYPE,
  GET_POSTS,
  UPDATE_POST,
  GET_POST
} = require('../types');

const iState = {
  posts: [],
  postsLoading: '', // Should be type enum('Loading', 'Loaded', 'Inactive')
  curPost: {}
};

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case POST_LOADING_TYPE:
      return { ...state, postsLoading: action.payload };
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case UPDATE_POST:
      // this works because objects, arrays, and functions are reference types whereas booleans, numbers, and strings are value types
      // reference types will refer to what the equated value is at the current time rather than what the referenced value was at the time of reference
      let updatedPosts = state.posts;
      let targetPost = {};
      updatedPosts.map((post) => {
        if (post._id === action.payload._id) {
          // console.log('found');
          targetPost = post;
        }
      });
      targetPost.likes++;
      return { ...state };
    case GET_POST:
      // console.log(action.payload);
      return { ...state, curPost: action.payload };
    default:
      return { ...state };
  }
};

export default PostReducer;
