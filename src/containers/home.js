import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit() {
    console.log(this.state.searchTerm);
    this.props.history.push('/products');
  }

  render() {
    return (
      <div id="thumbnails">
        <input className="searchTerm" onChange={this.onSearchChange} value={this.state.searchTerm} placeholder="search" />
        <button type="button" onClick={this.onSearchSubmit} id="SearchSubmitButton">Submit</button>
      </div>
    );
  }
}


// connects particular parts of redux state to this components props
// const mapStateToProps = state => (
//   {
//     // all: state.products.all,
//   }
// );

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(null, null)(Home));
