import React from 'react';
import {connect} from 'react-redux';
import {open, select} from '../actions';
import Main from './component';

function mapStateToProps(state = {}) {
  return {
    name: state.name,
    spoiler: state.spoiler
  };
}

function mapDispatchToProps(dispatch) {
  return {
    select: name => dispatch(select(name))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
