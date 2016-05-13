import React from 'react';
import Spoiler from '../spoiler/component';

export default React.createClass({

  componentDidMount() {
    document.getElementById('characters').addEventListener('click', this.onClick);
  },

  componentWillUnmount() {
    document.getElementById('characters').removeEventListener('click', this.onClick);
  },

  onClick(e) {
    if (e.target && e.target.nodeName === 'LI') {
      const name = (e.target.textContent || '').trim();
      this.props.select(name);
    }
  },

  render() {
    const {spoiler} = this.props;
    return (
      <div>
        {(spoiler && Object.keys(spoiler).length > 0) ?
          <Spoiler {...spoiler}/>
          : null}
      </div>
    );
  }
});
