import React from 'react';

export default ({name, description, death, death_info, image}) => {
  return (
    <div className='spoiler'>
      <section>
        <img src={image} width="100" height="100" alt={name}/>
        <h4>Name</h4>
        <p>{name}</p>
      </section>
      <section>
        <h4>Description</h4>
        <p>{description}</p>
      </section>
      <section>
        <h4>Death ({death})</h4>
        <p>
          {death_info}
        </p>
      </section>
    </div>
  );
}