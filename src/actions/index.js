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
};

const ROOT_URL = 'http://localhost:9090/api';
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
