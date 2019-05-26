/* eslint-disable new-cap */
import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Switch, Route, NavLink,
} from 'react-router-dom';
import Home from '../containers/home';
import NewReview from '../containers/newReview';
import Signin from '../containers/signin';
import Signup from '../containers/signup';
import Products from '../containers/products';
import Product from '../containers/product';
import User from '../containers/user';
import RequireAuth from '../containers/requireAuth';

const About = (props) => {
  return <div> All there is to know about me </div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul id="nav">
        <li><NavLink id="navItem" to="/" exact>LOGO</NavLink></li>
        <li><NavLink id="navItem" to="/about">About</NavLink></li>
        <li><NavLink id="navItem" to="/signin" exact>Log In</NavLink></li>
      </ul>
    </nav>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/newReview/:id" component={RequireAuth(NewReview)} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={Product} />
          <Route path="/user/:username" component={User} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

// ReactDOM.render(<App />, document.getElementById('main'));

export default App;
