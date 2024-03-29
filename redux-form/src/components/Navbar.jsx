import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { themeSelector, toggleTheme } from '../features/theme';
import { selectNavbarItem } from '../features/navbar';

const Navbar = (props) => {
  const classTheme = useSelector(themeSelector) === 'dark' ? 'is-dark' : '';
  const dispatch = useDispatch();
  const handleToggleTheme = bindActionCreators(toggleTheme, dispatch);
  const handleSelectNavbarItem = (event) => dispatch(selectNavbarItem(event.target.innerText));
  return (
    <nav className={`navbar ${classTheme}`}>
      <div className='navbar-brand'>
        <p className='navbar-item'> Redux Form </p>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <div className='navbar-item'>
            <a className='navbar-item' onClick={handleSelectNavbarItem}> Home </a>
          </div>
          <div className='navbar-item'>
            <a className='navbar-item' onClick={handleSelectNavbarItem}> Form </a>
          </div>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='field'>
              <input
                id='theme'
                type='checkbox'
                className='switch is-warning is-rounded is-outlined'
                onClick={handleToggleTheme}
                checked={classTheme===''}
              />
              <label htmlFor='theme'> Theme </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
