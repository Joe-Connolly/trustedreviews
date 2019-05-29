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
      <div className="container-fluid">
        <h2>{this.props.user.username}</h2>
        <h4>Number of Reviews: {this.props.user.numReviews}</h4>
        <div className="card-columns">
          {reviews}
        </div>
      </div>
    );
  }
}

const ReviewDisplay = (props) => {
  // return (
  //   <div>
  //     {/* <img src={props.displayReview.imageURL} alt="Product Img Unavailable" />
  //       <br /> */}
  //     <hr />
  //     <NavLink to={`/product/${props.displayReview.product._id}`}>
  //       {props.displayReview.product.title}
  //     </NavLink>
  //     <br />
  //     {props.displayReview.product.company}
  //     <br />
  //     {props.displayReview.rating}
  //     <br />
  //     {props.displayReview.body}
  //   </div>
  // );
  return (
    <div>
      {/* <img src={props.displayReview.imageURL} alt="Product Img Unavailable" />
      <br /> */}
      <div className="card shadow" id="review-card">
        <NavLink to={`/product/${props.displayReview.product._id}`}>
          <h3>{props.displayReview.product.title}</h3>
        </NavLink>
        <h6 className="text-muted">{props.displayReview.product.company}</h6>
        <h5 className="card-text" id="rating"><i className="fas fa-star rating-star" /> {props.displayReview.rating}</h5>
        <p id="description">{props.displayReview.body}</p>
        {/* Helpful Ratio: {props.up /props.down} */}
      </div>
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
