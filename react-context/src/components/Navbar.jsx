import React, { useContext } from 'react';
import ThemeContext from '../contexts/theme';
import { toggleTheme } from '../actions/theme';

const Navbar = () => {
  const { theme, dispatchTheme } =  useContext(ThemeContext);
  const classTheme = theme === 'dark' ? 'is-dark' : '';
  const handleOnClick = () => dispatchTheme(toggleTheme());
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
                checked={theme==='light'}
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
