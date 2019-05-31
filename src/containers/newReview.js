import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchProduct, createReview } from '../actions/index';

class NewReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '3',
      ratingBody: '',
    };

    this.onRatingChange = this.onRatingChange.bind(this);
    this.onRatingBodyChange = this.onRatingBodyChange.bind(this);

    this.onNewReviewSubmit = this.onNewReviewSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  onRatingChange(event) {
    this.setState({ rating: event.target.value });
  }

  onRatingBodyChange(event) {
    this.setState({ ratingBody: event.target.value });
  }

  onNewReviewSubmit(e) {
    e.preventDefault();

    const review = {
      body: this.state.ratingBody,
      username: this.props.username,
      rating: this.state.rating,
      product: this.props.current._id,
    };

    if (review.rating === '1' || review.rating === '2' || review.rating === '3' || review.rating === '4' || review.rating === '5') {
      this.props.createReview(review, this.props.history);
    } else {
      console.log('Rating must be an integer between 1 and 5');
    }
  }

  render() {
    return (
      <div className="container-fluid">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 id="new-review-title">Review</h1>
        <div className="form-group">
          <h5>Rating</h5>
          <select onChange={this.onRatingChange} value={this.state.rating} className="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <h5>Review</h5>
          <textarea onChange={this.onRatingBodyChange} value={this.state.ratingBody} className="form-control" rows="3" />
        </div>
        <button type="submit" className="btn btn-primary" id="new-review-submit-button" onClick={this.onNewReviewSubmit}>Submit</button>
      </div>
    );
  }
}


const mapStateToProps = state => (
  {
    current: state.review.current,
    username: state.auth.user.username,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, { fetchProduct, createReview })(NewReview));
