/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <header className="text-center py-5 mb-4 page-header">
          <div className="container">
            <h1 className="font-weight-light text-white">Meet the Team</h1>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img src="https://i.imgur.com/iNWN6IU.jpg" className="card-img-top" alt="Joe Connolly" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Joe Connolly</h5>
                  <div className="card-text text-black-50">Dartmouth &apos;19</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img src="https://i.imgur.com/cVZL74U.jpg" className="card-img-top" alt="RJ Yang" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">RJ Yang</h5>
                  <div className="card-text text-black-50">Dartmouth &apos;19</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img src="https://i.imgur.com/X8lpFAr.jpg" className="card-img-top" alt="Soren Thompson" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Soren Thompson</h5>
                  <div className="card-text text-black-50">Dartmouth &apos;20</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img src="https://i.imgur.com/OODoQoY.jpg" className="card-img-top" alt="Shreyas Agnihotri" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Shreyas Agnihotri</h5>
                  <div className="card-text text-black-50">Dartmouth &apos;21</div>
                </div>
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

export default About;
