/* eslint-disable new-cap */
import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from '../containers/home';
import About from '../containers/about';
import NewReview from '../containers/newReview';
import Signin from '../containers/signin';
import Signup from '../containers/signup';
import Products from '../containers/products';
import Product from '../containers/product';
import User from '../containers/user';
import RequireAuth from '../containers/requireAuth';
import UnRequireAuth from '../containers/unRequireAuth';
import Nav from '../containers/navBar';
import Embed from '../containers/embed';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/embed" />
          <Route component={Nav} />
        </Switch>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/newReview/:id" component={RequireAuth(NewReview)} />
          <Route path="/signin" component={UnRequireAuth(Signin)} />
          <Route path="/signup" component={UnRequireAuth(Signup)} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={Product} />
          <Route path="/user/:username" component={User} />
          <Route path="/embed/:id" component={Embed} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
