import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Switch, Route, NavLink,
} from 'react-router-dom';
// import Counter from '../containers/counter';
// import Controls from '../containers/controls';
// import Nav from '../containers/navBar';
// import NewReview from '../containers/newReview';
import Home from '../containers/home';
import NewReview from '../containers/newReview';
import Signin from '../containers/signin';
import Signup from '../containers/signup';
import Products from '../containers/products';


// const App = () => <div className="test">All the REACT are belong to us!</div>;

const About = (props) => {
  return <div> All there is to know about me </div>;
};
// const Home = (props) => {
//   return (
//     <div>
//         Welcome
//       {/* <Counter />
//       <Controls /> */}
//     </div>
//   );
// };
// const NewReview = (props) => {
//   return (
//     <div>
//         Let us make a new review!
//       {/* <Counter />
//       <Controls /> */}
//     </div>
//   );
// };
// const Signin = (props) => {
//   return (
//     <div>
//         Log In!
//       {/* <Counter />
//       <Controls /> */}
//     </div>
//   );
// };
// const Signup = (props) => {
//   return (
//     <div>
//         Sign up!
//       {/* <Counter />
//       <Controls /> */}
//     </div>
//   );
// };

const Nav = (props) => {
  return (
    <nav>
      <ul id="nav">
        <li><NavLink id="navItem" to="/" exact>LOGO</NavLink></li>
        <li><NavLink id="navItem" to="/about">About</NavLink></li>
        <li><NavLink id="navItem" to="/newReview">Write a Review</NavLink></li>
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
          <Route path="/newReview" component={NewReview} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/products" component={Products} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

// ReactDOM.render(<App />, document.getElementById('main'));

export default App;
