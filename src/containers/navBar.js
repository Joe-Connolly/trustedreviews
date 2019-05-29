import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { signoutUser } from '../actions/index';
import SearchBar from './searchBar';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.onSignoutSubmit = this.onSignoutSubmit.bind(this);
    // this.renderLoginItems = this.renderLoginItems.bind(this);
  }

  onSignoutSubmit() {
    this.props.signoutUser(this.props.history);
  }

  // renderLoginItems() {
  //   if (this.props.auth) {
  //     return (
  //       <ul id="nav">
  //         <li><NavLink id="navItem" to="/" exact>LOGO</NavLink></li>
  //         <li><NavLink id="navItem" to="/about">About</NavLink></li>
  //         <NavLink id="navItem" to="/">
  //           <span onClick={this.onSignoutSubmit} role="button" tabIndex={0} id="signoutSubmit">Signout</span>
  //         </NavLink>
  //       </ul>
  //     );
  //   } else {
  //     return (
  //       <ul id="nav">
  //         <li><NavLink id="navItem" to="/" exact>LOGO</NavLink></li>
  //         <li><NavLink id="navItem" to="/about">About</NavLink></li>
  //         <li><NavLink id="navItem" to="/signin" exact>Log In</NavLink></li>
  //       </ul>
  //     );
  //   }
  // }

  render() {
    return (
      <Navbar className="navbar-light bg-light" light expand="xs" sticky="top" id="navbar">
        <NavbarBrand href="/">
          <i className="fas fa-pen-square" />
          TRUSTED REVIEWS
        </NavbarBrand>
        <SearchBar />
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="btn btn-light navItem" to="/about">ABOUT</NavLink>
          </NavItem>
          <NavItem>
            { this.props.auth ? (
              <NavLink className="navItem" to="/">
                <button onClick={this.onSignoutSubmit} type="button" className="btn btn-outline-danger navItem">SIGN OUT</button>
              </NavLink>
            ) : <NavLink className="btn btn-outline-success navItem" to="/signin" exact>LOG IN</NavLink>}
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => (
  {
    auth: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
