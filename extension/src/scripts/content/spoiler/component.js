import React from 'react';

export default ({name, description, death, death_info}) => {
  return (
    <div className='spoiler'>
      <div>
        <h3>Name</h3>
        <p>{name}</p>
      </div>
      <div>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div>
        <h3>Death</h3>
        <p>{`(${death}) ${death_info}`}</p>
      </div>
    </div>
  );
}
