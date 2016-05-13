import React from 'react';

export default (props) => {
  const spoiler = props.spoiler || {};
  const styles = {
    position: 'fixed',
    top: '0',
    right: '0',
    backgroundColor: 'red'
  };
  return (
    <div style={styles}>
      {spoiler.death}
    </div>
  );
}
