import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {
    reviews: [],
  },
};

const ReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return Object.assign({}, state, { all: action.payload });
    case ActionTypes.FETCH_PRODUCT:
      return Object.assign({}, state, { current: action.payload });
    case ActionTypes.CREATE_PRODUCT:
      return state;
    case ActionTypes.DELETE_PRODUCT:
      return state;
    case ActionTypes.UPDATE_PRODUCT:
      return Object.assign({}, state, { current: action.payload });
    case ActionTypes.CREATE_REVIEW:
      return state;
    case ActionTypes.UPVOTE:
      return Object.assign({}, state, { current: action.payload.product });
    case ActionTypes.DOWNVOTE:
      return Object.assign({}, state, { current: action.payload.product });
    default:
      return state;
  }
};

export default ReviewReducer;
