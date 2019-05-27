import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchProduct, createReview } from '../actions/index';


class NewReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: '',
      // picture_url: '',
      // company: '',
      // description: '',
      rating: '',
      ratingBody: '',
    };

    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onPictureURLChange = this.onPictureURLChange.bind(this);
    // this.onCompanyChange = this.onCompanyChange.bind(this);
    // this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
    this.onRatingBodyChange = this.onRatingBodyChange.bind(this);

    this.onNewReviewSubmit = this.onNewReviewSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  // onTitleChange(event) {
  //   this.setState({ title: event.target.value });
  // }

  // onPictureURLChange(event) {
  //   this.setState({ picture_url: event.target.value });
  // }

  // onCompanyChange(event) {
  //   this.setState({ company: event.target.value });
  // }

  // onDescriptionChange(event) {
  //   this.setState({ description: event.target.value });
  // }

  onRatingChange(event) {
    this.setState({ rating: event.target.value });
  }

  onRatingBodyChange(event) {
    this.setState({ ratingBody: event.target.value });
  }

  // onNewReviewSubmit() {
  //   console.log(this.state.title);
  //   const newProduct = {
  //     title: this.state.title,
  //     imageURL: this.state.picture_url,
  //     company: this.state.company,
  //     rating: this.state.rating,
  //     numReviews: 1,
  //     description: this.state.description,
  //   };
  //   this.props.createProduct(newProduct, this.props.history);
  // }

  onNewReviewSubmit() {
    console.log(this.state.username);
    console.log(this.state.rating);
    console.log(this.state.ratingBody);

    const review = {
      body: this.state.ratingBody,
      username: this.props.username,
      rating: this.state.rating,
      product: this.props.current._id,
    };

    this.props.createReview(review, this.props.history);
  }

  render() {
    return (
      <div id="thumbnails">
        {/* <input onChange={this.onTitleChange} value={this.state.title} placeholder="product title" />
        <br />
        <input onChange={this.onPictureURLChange} value={this.state.picture_url} placeholder="product picture URL" />
        <br />
        <input onChange={this.onCompanyChange} value={this.state.company} placeholder="product company" />
        <br />
        <input onChange={this.onDescriptionChange} value={this.state.description} placeholder="product description" />
        <br /> */}

        <img src={this.props.current.imageURL} alt="Product Img Unavailable" />
        <br />
        {this.props.current.title}
        <br />
        Company: {this.props.current.company}
        <br />
        Description: {this.props.discription}
        <br />
        <hr />
        Review:
        <br />
        Rating: <input onChange={this.onRatingChange} value={this.state.rating} placeholder="rating (out of 5 stars)" />
        <br />
        Review Description: <input onChange={this.onRatingBodyChange} value={this.state.ratingBody} placeholder="rating description" />
        <br />
        <button type="button" onClick={this.onNewReviewSubmit}>Submit</button>
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
