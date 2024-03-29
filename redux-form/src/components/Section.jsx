import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
import FormPage from './FormPage';

import { themeSelector } from '../features/theme';
import { navbarSelector } from '../features/navbar';

const Section = (props) => {
  const classTheme = useSelector(themeSelector) === 'dark' ? 'is-dark' : '';
  const navbar = useSelector(navbarSelector);
  return (
    <section className={`hero ${classTheme} is-fullheight`}>
      <div className='container'>
        { navbar === 'Home' && <Home/> }
        { navbar === 'Form' && <FormPage/> }
      </div>
    </section>
  );
};

export default Section;
