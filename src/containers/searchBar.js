import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Input, InputGroup, Button } from 'reactstrap';
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
      <InputGroup id="search-bar">
        <Input onChange={this.onSearchChange} value={this.state.searchTerm} placeholder="Search products..." />
        <Button id="search-button" color="warning" onClick={this.onSearchSubmit}>Search</Button>
      </InputGroup>
    );
  }
}

const mapStateToProps = state => (
  {
    searchTerm: state.search.searchTerm,
  }
);

export default withRouter(connect(mapStateToProps, { fetchProducts, onSearchChanged })(Home));
