import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { fetchProduct, upvote, downvote } from '../actions/index';


// this can be dumb or smart component - connect works with either
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    // eslint-disable-next-line max-len
    const reviews = this.props.current.reviews.map(review => <ReviewDisplay displayReview={review} key={review._id} upvote={this.props.upvote} downvote={this.props.downvote} history={this.props.history} auth={this.props.auth} />);

    return (
      <div id="thumbnails">
        <img src={this.props.current.imageURL} alt="Product Img Unavailable" />
        <br />
        {this.props.current.title}
        <br />
        Company: {this.props.current.company}
        <br />
        Rating: {this.props.current.rating}
        <br />
        Number of Reviews: {this.props.current.numReviews}
        <br />
        Description: {this.props.discription}
        <br />
        Shop: Placeholder (URL)
        <br />
        <NavLink to={`/newReview/${this.props.current._id}`}>Write a Review</NavLink>
        <br />
        <br />
        Reviews:
        {reviews}
      </div>
    );
  }
}

const ReviewDisplay = (props) => {
  const displayObject = {
    username: props.displayReview.username,
    reviewID: props.displayReview.id,
  };

  return (
    <div>
      {/* <img src={props.displayReview.imageURL} alt="Product Img Unavailable" />
      <br /> */}
      <hr />
      <NavLink to={`/user/${props.displayReview.username}`}>
        {props.displayReview.username}
      </NavLink>
      <br />
      {/* Placeholder buttons */}
      <button type="button" onClick={() => { if (props.auth) { props.upvote(displayObject); } else { props.history.push('/signin'); } }}>Upvote</button> {props.displayReview.numUpvotes}
      <br />
      <button type="button" onClick={() => { if (props.auth) { props.downvote(displayObject); } else { props.history.push('/signin'); } }}>Downvote</button> {props.displayReview.numDownvotes}
      <br />
      Helpful Ratio: {props.up / props.down}
      <br />
      Rating: {props.displayReview.rating}
      <br />
      Rating Description: {props.displayReview.body}
    </div>
  );
};

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    current: state.review.current,
    auth: state.auth.authenticated,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, { fetchProduct, upvote, downvote })(Product));
