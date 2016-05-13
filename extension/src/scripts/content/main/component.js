import $ from 'jquery';
import React from 'react';
import Spoiler from '../spoiler/component';

export default React.createClass({

  componentDidMount() {
    global.window.addEventListener('click', this.onClick, false);
  },

  componentWillUnmount() {
    $(global.document).off('click', 'li', this.onNameClick);
  },

  onClick() {
    this.props.select('eddard');
  },

  render() {
    const {spoiler} = this.props;
    return (
      <div>
        {spoiler ? <Spoiler spoiler={spoiler}/> : null}
      </div>
    );
  }
});
