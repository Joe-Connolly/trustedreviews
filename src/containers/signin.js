import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
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


  onSigninSubmit(e) {
    e.preventDefault();
    this.props.signinUser({
      username: this.state.username,
      password: this.state.password,
    }, this.props.history);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6" id="login-image" />
          <div className="col-md-8 col-lg-6">
            <div className="d-flex align-items-center py-5" id="login">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="font-weight-light mb-4">Welcome back!</h3>
                    <form>
                      <div className="form-label-group">
                        <input className="form-control" onChange={this.onUsernameChange} value={this.state.username} placeholder="Username" required />
                      </div>
                      <div className="form-label-group">
                        <input type="password" className="form-control" onChange={this.onPasswordChange} value={this.state.password} placeholder="Password" required />
                      </div>
                      <button className="btn btn-lg btn-primary btn-block font-weight-bold mb-2" id="sign-in-submit-button" type="submit" onClick={(e) => { this.onSigninSubmit(e); }}>Sign in</button>
                      <div className="text-center">
                        <NavLink to="/signup" exact>Sign Up</NavLink>
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

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(null, { signinUser })(Signin));
