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
    console.log(reviews);

    return (
      <div className="container-fluid" id="main-card-container">
        <div className="row">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-horizontal">
                <div>
                  <img id="main-product-image"
                    src={this.props.current.imageURL}
                    alt="Product Img Unavailable"
                  />
                </div>
                <div className="card-body">
                  <h3 className="my-3">{this.props.current.title}</h3>
                  <h4 className="my-4">{this.props.current.company}</h4>
                  <p>{this.props.current.description}</p>
                  <h3 className="my-3"><i className="fas fa-star rating-star" id="main-rating-star" />{this.props.current.rating}</h3>
                  <p>{this.props.current.numReviews} reviews</p>
                  <NavLink to={`/newReview/${this.props.current._id}`}>
                    <button type="button" className="btn btn-primary" id="write-review-button">Write a Review</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-columns">
          {reviews}
        </div>
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
      <div className="card shadow" id="review-card">
        <NavLink to={`/user/${props.displayReview.username}`}>
          <h3>{props.displayReview.username}</h3>
        </NavLink>
        <h5 className="card-text" id="rating"><i className="fas fa-star rating-star" /> {props.displayReview.rating}</h5>
        {/* Placeholder buttons */}
        <button type="button"
          className="vote-button"
          onClick={() => {
            if (props.auth) {
              props.upvote(displayObject);
            } else {
              props.history.push('/signin');
            }
          }}
        ><i className="fas fa-thumbs-up" />
        </button> {props.displayReview.numUpvotes}
        <button type="button"
          id="downvote-button"
          className="vote-button"
          onClick={() => {
            if (props.auth) {
              props.downvote(displayObject);
            } else {
              props.history.push('/signin');
            }
          }}
        ><i className="fas fa-thumbs-down" />
        </button> {props.displayReview.numDownvotes}
        <p id="description">{props.displayReview.body}</p>
        {/* Helpful Ratio: {props.up /props.down} */}
      </div>
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
