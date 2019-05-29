/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button, CardFooter, CardDeck,
// } from 'reactstrap';
import { fetchProducts } from '../actions/index';
// import SearchBar from './searchBar';


// this can be dumb or smart component - connect works with either
class Products extends Component {
  render() {
    // eslint-disable-next-line max-len
    // const postThumbs = this.props.all.map(post => <NavLink to={`/posts/${post.id}`} className="thumbnail" key={post.id}> <img src={post.cover_url} alt={post.title} /> <Description tags={post.tags} author={post.author} title={post.title} /> </NavLink>);
    // const productTitles = this.props.all.map(product => <h1>{product.title}</h1>);
    const products = this.props.all.map(product => <ProductCard displayProduct={product} key={product._id} />);

    return (
      <div>
        <header className="text-center py-5 mb-4 page-header">
          <div className="container">
            { this.props.searchTerm !== '' ? (
              <h1 className="font-weight-light text-white">
                &quot;{ this.props.searchTerm }&quot;
              </h1>
            ) : <h1 className="font-weight-light text-white">All Products</h1>
            }
          </div>
        </header>
        <div id="search-results-container">
          {/* <CardDeck> */}
          <div className="card-deck">
            {products}
          </div>
          {/* </CardDeck> */}
        </div>
      </div>
    );
  }
}

const ProductCard = (props) => {
  return (
    <div className="card" id="product-card">
      {/* <div className="card-header">
        Average Rating: {props.displayProduct.rating}
      </div> */}
      <NavLink to={`/product/${props.displayProduct._id}`}>
        <img className="card-img-top" src={props.displayProduct.imageURL} alt="Gallery Not Found" />
      </NavLink>
      <div className="card-body">
        <h4 className="card-title">{props.displayProduct.title}</h4>
        <h5>{props.displayProduct.company}</h5>
        <p className="card-text"><i className="fas fa-star rating-star" /> {props.displayProduct.rating}</p>
        <p className="card-text"><small className="text-muted">{props.displayProduct.numReviews} Reviews</small></p>
      </div>
    </div>
  );
};

// const Description = (props) => {
//   const tags = props.tags.split(' ').map(tag => <span key={tag}>{`#${tag} `}</span>);

//   if (props.tags === '') {
//     return (
//       <div>
//         {props.title}
//         <div />
//         By: {props.author}
//         <div />
//         <div />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         {props.title}
//         <div />
//         By: {props.author}
//         <div />
//         {tags}
//       </div>
//     );
//   }
// };

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    searchTerm: state.search.searchTerm,
    all: state.review.all,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, { fetchProducts })(Products));
