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
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 text-center">
                <i className="fas fa-camera main-icon" />
                <h3>Fully Responsive</h3>
                <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                {/* <div className="features-icons-icon d-flex">
                  <i className="icon-layers m-auto text-primary" />
                </div> */}
                <h3>Bootstrap 4 Ready</h3>
                <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                {/* <div className="features-icons-icon d-flex">
                  <i className="icon-check m-auto text-primary" />
                </div> */}
                <h3>Easy to Use</h3>
                <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
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
