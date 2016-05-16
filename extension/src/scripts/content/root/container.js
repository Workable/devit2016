import React from 'react';
import {connect} from 'react-redux';
import Root from './component';

function mapStateToProps(state = {}) {
  return {
    name: state.name,
    spoiler: state.spoiler
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);