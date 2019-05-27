/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { fetchProducts } from '../actions/index';
// import SearchBar from './searchBar';


// this can be dumb or smart component - connect works with either
class Products extends Component {
  render() {
    // eslint-disable-next-line max-len
    // const postThumbs = this.props.all.map(post => <NavLink to={`/posts/${post.id}`} className="thumbnail" key={post.id}> <img src={post.cover_url} alt={post.title} /> <Description tags={post.tags} author={post.author} title={post.title} /> </NavLink>);
    // const productTitles = this.props.all.map(product => <h1>{product.title}</h1>);
    const products = this.props.all.map(product => <Display displayProduct={product} key={product._id} />);

    return (
      <div id="thumbnails">
        {/* <SearchBar /> */}
        {/* <NoteCreator onNoteCreate={this.createNote} />
        {this.renderNotes(this.state.notes)} */}
        {/* <p>Here are our product titles</p> */}
        {/* {postThumbs} */}
        {/* {productTitles} */}
        {products}
      </div>
    );
  }
}

const Display = (props) => {
  return (
    <div>
      <NavLink to={`/product/${props.displayProduct._id}`}>
        <img src={props.displayProduct.imageURL} alt="Product Img Unavailable" />
        <br />
        {props.displayProduct.title}
        <br />
        {props.displayProduct.company}
        <br />
        {props.displayProduct.rating}
        <br />
        {props.displayProduct.numReviews}
      </NavLink>
      <br />
      <hr />
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
    all: state.review.all,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, { fetchProducts })(Products));
