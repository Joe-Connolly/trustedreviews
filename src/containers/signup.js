import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { signupUser, signinUser } from '../actions/index';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmedPassword: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onConfirmedPasswordChange = this.onConfirmedPasswordChange.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onConfirmedPasswordChange(event) {
    this.setState({ confirmedPassword: event.target.value });
  }


  onSignupSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmedPassword) {
      console.log('Passwords do not match.');
    } else {
      this.props.signupUser({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
      }, this.props.history);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6" id="signup-image" />
          <div className="col-md-8 col-lg-6">
            <div className="d-flex align-items-center py-5" id="signup">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="font-weight-light mb-4">Welcome to Trusted Reviews!</h3>
                    <form>
                      <div className="form-label-group">
                        <input className="form-control" onChange={this.onUsernameChange} value={this.state.username} placeholder="Username" required />
                      </div>
                      <div className="form-label-group">
                        <input type="email" className="form-control" onChange={this.onEmailChange} value={this.state.email} placeholder="Email" required />
                      </div>
                      <div className="form-label-group">
                        <input type="password" className="form-control" onChange={this.onPasswordChange} value={this.state.password} placeholder="Password" required />
                      </div>
                      <div className="form-label-group">
                        <input type="password" className="form-control" onChange={this.onConfirmedPasswordChange} value={this.state.confirmedPassword} placeholder="Confirm Password" required />
                      </div>
                      <button className="btn btn-lg btn-primary btn-block font-weight-bold mb-2" id="sign-up-submit-button" type="submit" onClick={(e) => { this.onSignupSubmit(e); }}>Sign Up</button>
                      <div className="text-center">
                        <NavLink to="/signin" exact>Sign In</NavLink>
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
export default withRouter(connect(null, { signupUser, signinUser })(Signup));
