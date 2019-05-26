import React from 'react';
import '../style.scss';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class RequireAuth extends React.Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => (
    {
      authenticated: state.auth.authenticated,
    }
  );

  return connect(mapStateToProps, null)(RequireAuth);
}
