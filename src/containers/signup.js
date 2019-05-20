import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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

    this.onSignupSubmit = this.onSignupSubmit.bind(this);
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
    this.setState({ password: event.target.value });
  }


  onSignupSubmit() {
    console.log(this.state.username);
  }

  render() {
    return (
      <div id="thumbnails">
        <input onChange={this.onUsernameChange} value={this.state.username} placeholder="username" />
        <br />
        <input onChange={this.onEmailChange} value={this.state.email} placeholder="email" />
        <br />
        <input onChange={this.onPasswordChange} value={this.state.password} placeholder="password" type="password" />
        <br />
        <input onChange={this.onConfirmedPasswordChange} value={this.state.confirmedPassword} placeholder="confirm password" type="password" />
        <br />
        <button type="button" onClick={this.onSignupSubmit}>Submit</button>
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
export default withRouter(connect(null, null)(Signup));
