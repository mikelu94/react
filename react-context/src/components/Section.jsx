import React, { useContext } from 'react';
import ThemeContext from '../contexts/theme';

const Section = () => {
  const { theme } =  useContext(ThemeContext);
  const classTheme = theme === 'dark' ? 'is-dark' : '';
  return (
    <section className={`hero ${classTheme} is-fullheight`}>
      <div className='container'>
        <h1 className='title'> React Context </h1>
      </div>
    </section>
  );
};

export default Section;
