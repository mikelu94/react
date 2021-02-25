import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { themeSelector } from '../selectors/theme';
import { toggleTheme } from '../actions/theme';

const Navbar = () => {
  const classTheme = useSelector(themeSelector) === 'dark' ? 'is-dark' : '';
  const dispatch = useDispatch();
  const handleOnClick = bindActionCreators(toggleTheme, dispatch);
  return (
    <nav className={`navbar ${classTheme}`}>
      <div className='navbar-brand'>
        <p className='navbar-item'> Redux </p>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <div className='navbar-item'>
            <a className='navbar-item'> Home </a>
          </div>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='field'>
              <input
                id='theme'
                type='checkbox'
                className='switch is-warning is-rounded is-outlined'
                onClick={handleOnClick}
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
