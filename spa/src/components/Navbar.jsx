import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar is-dark'>
      <div className='navbar-brand'>
        <p href='/' className='navbar-item'> React </p>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <div className='navbar-item'>
            <a href='/' className='navbar-item'> Home </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;