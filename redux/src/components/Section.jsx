import React from 'react';
import { connect } from 'react-redux';

const Section = (props) => {
  const classTheme = props.theme === 'dark' ? 'is-dark' : '';
  return (
    <section className={`hero ${classTheme} is-fullheight`}>
      <div className='container'>
        <h1 className='title'> Redux </h1>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({ theme: state.theme });

export default connect(mapStateToProps)(Section);
