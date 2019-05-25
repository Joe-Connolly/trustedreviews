import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchProducts, onSearchChanged } from '../actions/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ searchTerm: this.props.searchTerm || '' });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit() {
    this.props.onSearchChanged(this.state.searchTerm);
    this.props.fetchProducts(this.state.searchTerm, this.props.history);
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

const mapStateToProps = state => (
  {
    searchTerm: state.search.searchTerm,
  }
);

export default withRouter(connect(mapStateToProps, { fetchProducts, onSearchChanged })(Home));
