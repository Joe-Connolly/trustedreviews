import { ActionTypes } from '../actions';

const authState = {
  authenticated: false,
  user: {
    username: '',
  },
};

const AuthReducer = (state = authState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { authenticated: true, user: action.payload };
    case ActionTypes.DEAUTH_USER:
      return { authenticated: false, user: { username: '' } };
    case ActionTypes.AUTH_ERROR:
      return { authenticated: false, user: { username: '' } };
    default:
      break;
  }
  return state;
};

export default AuthReducer;
