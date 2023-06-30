import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar is-dark'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'> React Router </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <div className='navbar-item'>
            <Link to='/router-provider' className='navbar-item'> Router Provider </Link>
          </div>
          <div className='navbar-item'>
            <Link to='/route' className='navbar-item'> Route </Link>
          </div>
          <div className='navbar-item'>
            <Link to='/outlet' className='navbar-item'> Outlet </Link>
          </div>
          <div className='navbar-item'>
            <Link to='/link' className='navbar-item'> Link </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
