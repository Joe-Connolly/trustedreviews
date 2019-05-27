/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchProducts } from '../actions/index';
import SearchBar from './searchBar';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4 text-white font-weight-bold">Reviews reimagined.</h1>
          <hr className="my-4" />
          <SearchBar />
          <hr className="my-8" />
          <h3 className="text-white font-weight-bold">Explore the first truly secure database of verified customer reviews.</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              One of three columns
            </div>
            <div className="col-sm">
              One of three columns
            </div>
            <div className="col-sm">
              One of three columns
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// connects particular parts of redux state to this components props
// const mapStateToProps = state => (
//   {
//     // all: state.products.all,
//   }
// );

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(null, { fetchProducts })(Home));
