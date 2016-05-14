import React from 'react';
import {connect} from 'react-redux';
import {requestSpoiler} from '../actions';
import Root from './component';

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
