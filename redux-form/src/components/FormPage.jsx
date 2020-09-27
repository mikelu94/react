import React from 'react';
import Form from './Form';

class FormPage extends React.Component {
  submit = (values) => {
    console.log(values);
  } 
  render() {
    return (
      <div className='box'>
        <Form onSubmit={this.submit}/>
      </div>
    );
  }
}

export default FormPage;