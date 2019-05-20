import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.onSignoutSubmit = this.onSignoutSubmit.bind(this);
    this.renderLoginItems = this.renderLoginItems.bind(this);
  }

  onSignoutSubmit() {
    // this.props.signoutUser(this.props.history);
    console.log(this.props);
  }

  //   renderLoginItems() {
  //     if (this.props.auth) {
  //       return (
  //         <ul id="nav">
  //           <li><NavLink id="navItem" to="/" exact>Posts</NavLink></li>
  //           <li><NavLink id="navItem" to="/posts/new">Create New Post</NavLink></li>
  //           <li>
  //             <NavLink id="navItem" to="/">
  //               <span onClick={this.onSignoutSubmit} role="button" tabIndex={0} id="signoutSubmit">Signout</span>
  //             </NavLink>
  //           </li>
  //         </ul>
  //       );
  //     } else {
  //       return (
  //         <ul id="nav">
  //           <li><NavLink id="navItem" to="/" exact>Posts</NavLink></li>
  //           <li><NavLink id="navItem" to="/posts/new">Create New Post</NavLink></li>
  //           <li><NavLink id="navItem" to="/signin" exact>Signin</NavLink></li>
  //           <li><NavLink id="navItem" to="/signup">Signup</NavLink></li>
  //         </ul>
  //       );
  //     }
  //   }

  render() {
    return (
      <nav>
        {/* {this.renderLoginItems()} */}
        <ul id="nav">
          <li><NavLink id="navItem" to="/" exact>LOGO</NavLink></li>
          <li><NavLink id="navItem" to="/about">About</NavLink></li>
          {/* <li><NavLink id="navItem" to="/newReview">Write a Review</NavLink></li> */}
          <li><NavLink id="navItem" to="/signin" exact>Log In</NavLink></li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => (
  {
    // auth: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, null)(Nav));
