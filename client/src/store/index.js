// STEP 1: import and integrate thunk into our app

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import PostReducer from './reducers/PostReducer';
import thunk from 'redux-thunk';
import ReviewReducer from './reducers/ReviewReducer';

const store = createStore(
  combineReducers({
    postState: PostReducer,
    reviewState: ReviewReducer
  }),
  // thunk syncronizes everything together:
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
