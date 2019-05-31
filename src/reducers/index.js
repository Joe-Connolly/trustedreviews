// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import ReviewReducer from './reviews-reducer';
import UserReducer from './user-reducer';
import SearchReducer from './search-reducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  review: ReviewReducer,
  userProfile: UserReducer,
  search: SearchReducer,
  auth: AuthReducer,
});

export default rootReducer;
