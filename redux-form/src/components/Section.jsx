import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import FormPage from './FormPage';

const Section = (props) => {
  const classTheme = props.theme === 'dark' ? 'is-dark' : '';
  return (
    <section className={`hero ${classTheme} is-fullheight`}>
      <div className='container'>
        { props.navbar === 'Home' && <Home/> }
        { props.navbar === 'Form' && <FormPage/> }
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme,
  navbar: state.navbar,
});

export default connect(mapStateToProps)(Section);
