import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',

  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  FETCH_PRODUCT: 'FETCH_PRODUCT',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT',
  CREATE_PRODUCT: 'CREATE_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',

  FETCH_USER: 'FETCH_USER',
  CREATE_REVIEW: 'CREATE_REVIEW',

  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'https://trusted-reviews.herokuapp.com/api';
const API_KEY = '';

/* Review and product functions */

export function fetchProducts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/products${API_KEY}`).then((response) => {
      // do something with response.data  (some json)
      dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
    }).catch((error) => {
      // hit an error do something else!
      console.log('Oh no!! Something went wrong when you tried to fetch all products.');
    });
  };
}

export function fetchProduct(id) {
  console.log(id);
  return (dispatch) => {
    axios.get(`${ROOT_URL}/products/${id}${API_KEY}`).then((response) => {
      // do something with response.data  (some json)
      dispatch({ type: ActionTypes.FETCH_PRODUCT, payload: response.data });
      console.log(response.data);
    }).catch((error) => {
      // hit an error do something else!
      console.log(`Oh no!! Something went wrong when you tried to fetch product ${id}.`);
    });
  };
}

export function createProduct(product, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/products${API_KEY}`, product, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        // do something with response.data  (some json)
        dispatch({ type: ActionTypes.CREATE_PRODUCT, payload: response.data });
        history.push('/');
      }).catch((error) => {
        // hit an error do something else!
        console.log('Oh no!! Failed to create new product.');
      });
  };
}

export function deleteProduct(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/products/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        // do something with response.data  (some json)
        dispatch({ type: ActionTypes.DELETE_PRODUCT, payload: response.data });
        history.push('/');
      }).catch((error) => {
        // hit an error do something else!
        console.log(`Oh no!! Failed to delete product ${id}.`);
      });
  };
}

export function updateProduct(id, product) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/products/${id}${API_KEY}`, product, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        // do something with response.data  (some json)
        dispatch({ type: ActionTypes.UPDATE_PRODUCT, payload: response.data });
      }).catch((error) => {
        // hit an error do something else!
        console.log(`Oh no!! Failed to update product ${id}.`);
      });
  };
}

export function fetchUser(username) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/users/${username}${API_KEY}`)
      .then((response) => {
        // do something with response.data  (some json)
        dispatch({ type: ActionTypes.FETCH_USER, payload: response.data });
        console.log(response.data);
      }).catch((error) => {
        // hit an error do something else!
        console.log(`Oh no!! Something went wrong when you tried to fetch user ${username}.`);
      });
  };
}

export function createReview(review, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/reviews${API_KEY}`, review, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        // do something with response.data  (some json)
        dispatch({ type: ActionTypes.CREATE_REVIEW, payload: response.data });
        history.push(`/product/${review.product}`);
      }).catch((error) => {
        console.log('Oh no!! Failed to create new review.');
        console.log(error);
      });
  };
}

/* Authentication Functions */

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ username, password }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { username, password })
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        history.push('/');
      })
      .catch((error) => {
        dispatch(authError(`Sign In Failed: ${error.response.data}`));
      });
  };
}

export function signupUser({ email, username, password }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, username, password })
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        history.push('/');
      })
      .catch((error) => {
        dispatch(authError(`Sign Up Failed: ${error.response.data}`));
      });
  };
}

export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}


/* Upvote/Downvote functions */

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}
