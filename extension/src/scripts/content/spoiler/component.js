import React from 'react';

export default ({name, description, image, death, death_info}) => {
  return (
    <div className='spoiler'>
      <section>
        <img width='100px' height='100px' src={image}/>
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
