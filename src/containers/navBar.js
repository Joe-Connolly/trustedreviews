import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import { signoutUser } from '../actions/index';
import SearchBar from './searchBar';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.onSignoutSubmit = this.onSignoutSubmit.bind(this);
  }

  onSignoutSubmit() {
    this.props.signoutUser(this.props.history);
  }

  render() {
    return (
      <Navbar className="navbar-light bg-light" light expand="xs" sticky="top" id="navbar">
        <NavLink to="/" exact id="companyLogo">
          <i className="fas fa-pen-square" id="logo-icon" />
          TRUSTED REVIEWS
        </NavLink>
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
