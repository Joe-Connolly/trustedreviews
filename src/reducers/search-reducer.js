import { ActionTypes } from '../actions';

const initialState = {
  searchTerm: '',
};

const ReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_CHANGED:
      return { searchTerm: action.payload };
    default:
      return state;
  }
};

export default ReviewReducer;
