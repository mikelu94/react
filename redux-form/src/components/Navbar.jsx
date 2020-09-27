import React from 'react';
import { connect } from 'react-redux';
import { toggleTheme } from '../actions/theme';
import { selectNavbarItem } from '../actions/navbar';

const Navbar = (props) => {
  const classTheme = props.theme === 'dark' ? 'is-dark' : '';
  return (
    <nav className={`navbar ${classTheme}`}>
      <div className='navbar-brand'>
        <p className='navbar-item'> Redux Form </p>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <div className='navbar-item'>
            <a className='navbar-item' onClick={props.selectNavbarItem}> Home </a>
          </div>
          <div className='navbar-item'>
            <a className='navbar-item' onClick={props.selectNavbarItem}> Form </a>
          </div>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='field'>
              <input
                id='theme'
                type='checkbox'
                className='switch is-warning is-rounded is-outlined'
                onClick={props.toggleTheme}
              />
              <label htmlFor='theme'> Theme </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({ theme: state.theme });

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(toggleTheme()),
  selectNavbarItem: (event) => dispatch(selectNavbarItem(event.target.innerText)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
