import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchProduct } from '../actions/index';


// this can be dumb or smart component - connect works with either
class Embed extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    const reviewURL = `http://trustedreviews.surge.sh/product/${this.props.current._id}`;

    return (
      // <div id="thumbnails">
      //   <img src={this.props.current.imageURL} alt="Product Img Unavailable" />
      //   <br />
      //   {this.props.current.title}
      //   <br />
      //   Company: {this.props.current.company}
      //   <br />
      //   Rating: {this.props.current.rating}
      //   <br />
      //   Number of Reviews: {this.props.current.numReviews}
      //   <br />
      //   Description: {this.props.discription}
      //   <br />
      //   Review Page URL: <a href={reviewURL}> trustedreviews.surge.sh/product </a>
      // </div>
      <div className="card shadow" id="review-card">
        <h3>{this.props.current.title}</h3>
        <h6 className="text-muted">{this.props.current.company}</h6>
        <h5 className="card-text" id="rating"><i className="fas fa-star rating-star" /> {this.props.current.rating}</h5>
        <p>{this.props.current.numReviews} reviews</p>
        <p className="text-muted">{this.props.current.description}</p>
        <a href={reviewURL}> <button type="button" className="btn btn-light"> See More </button> </a>
        {/* Helpful Ratio: {props.up /props.down} */}
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    current: state.review.current,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, { fetchProduct })(Embed));
