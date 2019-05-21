import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  FETCH_PRODUCT: 'FETCH_PRODUCT',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT',
  CREATE_PRODUCT: 'CREATE_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  FETCH_USER: 'FETCH_USER',
  CREATE_REVIEW: 'CREATE_REVIEW',
  INCREMENT: 'UPVOTE',
  DECREMENT: 'DOWNVOTE',
};

// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'https://trusted-reviews.herokuapp.com/api';
const API_KEY = '';

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
    axios.post(`${ROOT_URL}/products${API_KEY}`, product, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
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
    axios.delete(`${ROOT_URL}/products/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
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
    axios.put(`${ROOT_URL}/products/${id}${API_KEY}`, product, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
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
    axios.get(`${ROOT_URL}/users/${username}${API_KEY}`).then((response) => {
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
    axios.post(`${ROOT_URL}/reviews${API_KEY}`, review, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      // do something with response.data  (some json)
      dispatch({ type: ActionTypes.CREATE_REVIEW, payload: response.data });
      history.push(`/product/${review.product}`);
    }).catch((error) => {
      console.log('Oh no!! Failed to create new review.');
      console.log(error);
    });
  };
}

export function upvote(review) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/reviews/upvote${API_KEY}`, review, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      // do something with response.data  (some json)
      dispatch({ type: ActionTypes.UPVOTE, payload: response.data });
    }).catch((error) => {
      // hit an error do something else!
      console.log(`Oh no!! Failed to upvote for review ${review._id}.`);
    });
  };
}

export function downvote(review) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/reviews/downvote${API_KEY}`, review, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      // do something with response.data  (some json)
      dispatch({ type: ActionTypes.DOWNVOTE, payload: response.data });
    }).catch((error) => {
      // hit an error do something else!
      console.log(`Oh no!! Failed to downvote for review ${review._id}.`);
    });
  };
}
