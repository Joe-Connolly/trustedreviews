import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { fetchProduct } from '../actions/index';


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
    const reviews = this.props.current.reviews.map(review => <ReviewDisplay displayReview={review} key={review._id} />);

    return (
      <div id="thumbnails">
        <img src={this.props.current.imageURL} alt="Product Img Unavailable" />
        <br />
        {this.props.current.title}
        <br />
        {this.props.current.company}
        <br />
        {this.props.current.rating}
        <br />
        {this.props.current.numReviews}
        <br />
        {this.props.discription}
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
      <NavLink to={`/user/${props.displayReview.username}`}>
        {props.displayReview.username}
      </NavLink>
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
    current: state.review.current,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, { fetchProduct })(Product));
