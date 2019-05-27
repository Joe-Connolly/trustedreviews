import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { signinUser } from '../actions/index';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

    this.onSigninSubmit = this.onSigninSubmit.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }


  onSigninSubmit() {
    console.log(this.state.username);
    this.props.signinUser({
      username: this.state.username,
      password: this.state.password,
    }, this.props.history);
  }

  render() {
    return (
      /* <div id="thumbnails">
        <input onChange={this.onUsernameChange} value={this.state.username} placeholder="username" />
        <br />
        <input onChange={this.onPasswordChange} value={this.state.password} placeholder="password" type="password" />
        <br />
        <button type="button" onClick={this.onSigninSubmit}>Submit</button>
        <br />
        <NavLink to="/signup" exact>Sign Up</NavLink>
      </div> */
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <form>
                      <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                        {/* <label htmlFor="inputEmail">Email address</label> */}
                      </div>

                      <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        {/* <label htmlFor="inputPassword">Password</label> */}
                      </div>

                      <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        {/* <label className="custom-control-label" htmlFor="customCheck1">Remember password</label> */}
                      </div>
                      <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                      <div className="text-center">
                        {/* <a className="small" href="#">Forgot password?</a> */}
                      </div>
                    </form>
                  </div>
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

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(null, { signinUser })(Signin));
