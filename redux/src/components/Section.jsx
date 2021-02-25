import React from 'react';
import { useSelector } from 'react-redux';

import { themeSelector } from '../selectors/theme';

const Section = () => {
  const classTheme = useSelector(themeSelector) === 'dark' ? 'is-dark' : '';
  return (
    <section className={`hero ${classTheme} is-fullheight`}>
      <div className='container'>
        <h1 className='title'> Redux </h1>
      </div>
    </section>
  );
};

export default Section;
