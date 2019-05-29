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
          <div id="banner-content">
            <h1 className="display-4 text-white font-weight-bold">Reviews reimagined.</h1>
            <hr className="my-4" />
            <SearchBar />
            <hr className="my-8" />
            <h3 className="text-white font-weight-bold">Explore the first truly secure database of verified customer reviews.</h3>
          </div>
        </div>

        <div className="container">
          <div className="row" id="key-points">
            <div className="col-lg-4">
              <div className="mx-auto mb-5 mb-lg-0 mb-lg-3 text-center">
                <i className="fas fa-cart-plus main-icon" />
                <h3 className="blurb-title">Built for Business</h3>
                <p className="lead mb-0">
                  Retailers can use our secure API to embed verified,
                  pre-styled reviews directly within their sites.
                  Detailed documentation will be released soon!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mx-auto mb-5 mb-lg-0 mb-lg-3 text-center">
                <i className="fas fa-lock main-icon" />
                <h3 className="blurb-title">Safe and Secure</h3>
                <p className="lead mb-0">
                  All data, from user passwords to the reviews themselves,
                  are stored in a secure MongoDB cloud database deployed on Heroku,
                  accessible only with a secret key.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mx-auto mb-0 mb-lg-3 text-center">
                <i className="fas fa-users main-icon" />
                <h3 className="blurb-title">Pushed by People</h3>
                <p className="lead mb-0">
                  Trusted Reviews is meant to combat the fake review epidemic,
                  starting with a voting system to allow the most helpful reviews
                  to rise to the top.
                </p>
              </div>
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
