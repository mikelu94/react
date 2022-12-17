import React from 'react';

const RouterProvider = () => {
    return (
    <section className='hero is-dark is-fullheight'>
      <div className='container'>
        <h1 className='title'> Router Provider </h1>
        <p>This is the Component that contains all the Routes and renders the application.</p>
        <p>This needs a router as a property, which could be made with some functions provided by React Router, such as <code className='is-dark'>createBrowserRouter()</code>.</p>
      </div>
    </section>
  );
};

export default RouterProvider;
