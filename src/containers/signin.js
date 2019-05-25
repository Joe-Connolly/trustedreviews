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


  onSigninSubmit() {
    console.log(this.state.username);
    this.props.signinuser({
      email: this.state.email,
      password: this.state.password,
    }, this.props.history);
  }

  render() {
    return (
      <div id="thumbnails">
        <input onChange={this.onUsernameChange} value={this.state.username} placeholder="username" />
        <br />
        <input onChange={this.onPasswordChange} value={this.state.password} placeholder="password" type="password" />
        <br />
        <button type="button" onClick={this.onSigninSubmit}>Submit</button>
        <br />
        <NavLink to="/signup" exact>Sign Up</NavLink>
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
