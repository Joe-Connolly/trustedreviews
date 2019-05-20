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
    default:
      return state;
  }
};

export default ReviewReducer;