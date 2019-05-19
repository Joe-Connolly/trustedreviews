import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { fetchUser } from '../actions/index';


// this can be dumb or smart component - connect works with either
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.username);
  }

  render() {
    const reviews = this.props.user.reviews.map(review => <ReviewDisplay displayReview={review} key={review._id} />);


    return (
      <div>
        {this.props.user.username}
        <br />
        {this.props.user.reputation}
        <br />
        {reviews}
      </div>
    );
  }
}

const ReviewDisplay = (props) => {
  return (
    <div>
      {/* <img src={props.displayReview.imageURL} alt="Product Img Unavailable" />
        <br /> */}
      <NavLink to={`/product/${props.displayReview.product._id}`}>
        {props.displayReview.product.title}
      </NavLink>
      <br />
      {props.displayReview.product.company}
      <br />
      {props.displayReview.rating}
      <br />
      {props.displayReview.body}
    </div>
  );
};

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    user: state.userProfile.user,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, { fetchUser })(User));
