import React from 'react';

<<<<<<< HEAD
export default ({name, description, image, death, death_info}) => {
  return (
    <div className='spoiler'>
      <section>
        <img width='100px' height='100px' src={image}/>
        <h4>Name</h4>
=======
export default ({name, description, death, death_info, image}) => {
  return (
    <div className='spoiler'>
      <section>
        <img src={image} width="100" height="100" alt="#{name}" />
        <h3>Name</h3>
>>>>>>> 288b8a17c8f05c888cb59e8f1b5c6cc0b42b7adf
        <p>{name}</p>
      </section>
      <section>
        <h4>Description</h4>
        <p>{description}</p>
      </section>
      <section>
<<<<<<< HEAD
        <h4>Death</h4>
        <p>
          {death}
          <br />
          {death_info}
        </p>
=======
        <h4>Death ({death})</h4>
        <p>{death_info}</p>
>>>>>>> 288b8a17c8f05c888cb59e8f1b5c6cc0b42b7adf
      </section>
    </div>
  );
}
