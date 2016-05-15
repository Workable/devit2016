import React from 'react';

export default ({name, description, death, death_info}) => {
  return (
    <div className='spoiler'>
      <section>
        <img src="http://placekitten.com/100/100" />
        <h4>Name</h4>
        <p>{name}</p>
      </section>
      <section>
        <h4>Description</h4>
        <p>{description}</p>
      </section>
      <section>
        <h4>Death</h4>
        <p>
          {death} 
          <br />
          {death_info}
        </p>
      </section>
    </div>
  );
}
