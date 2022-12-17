import React from 'react';

const Route = () => {
    return (
    <section className='hero is-dark is-fullheight'>
      <div className='container'>
        <h1 className='title'> Route </h1>
        <p>This is the Component that contains Component(s) to render for a specific path.</p>
        <p>This should only be used in conjunction with <code className='is-dark'>createRoutesFromElements()</code> to create routes for the router.</p>
      </div>
    </section>
  );
};

export default Route;
