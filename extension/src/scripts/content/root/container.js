import React from 'react';
import {connect} from 'react-redux';
import Root from './component';
import {requestSpoiler} from '../actions';

function mapStateToProps(state = {}) {
  return {
    name: state.name,
    spoiler: state.spoiler
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestSpoiler: name => dispatch(requestSpoiler(name))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);