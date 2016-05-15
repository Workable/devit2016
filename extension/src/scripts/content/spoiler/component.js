import React from 'react';

export default ({name, description, death, death_info, image}) => {
  return (
    <div className='spoiler'>
      <section>
        <img src={image} width="100" height="100" alt={name}/>
        <h3>Name</h3>
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
