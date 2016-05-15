import React from 'react';
import Spoiler from '../spoiler/component';
import Loader from '../loader/component';
import styles from 'app/styles/main.css';

export default React.createClass({

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  },

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  },

  onClick(e) {
    if (e.target && e.target.className.toLowerCase() === 'character') {
      const name = (e.target.textContent || '').trim();
      this.props.requestSpoiler(name);
    }
  },

  render() {
    const {spoiler} = this.props;
    return (
      <div className='root'>
        <style>{styles}</style>
        {(spoiler && Object.keys(spoiler).length > 0) ?
          <Spoiler {...spoiler}/>
          : <Loader/>}
      </div>
    );
  }
});
