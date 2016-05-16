import React from 'react';
import Spoiler from '../spoiler/component';
import Loader from '../loader/component';
import styles from 'app/styles/main.css';

export default React.createClass({

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