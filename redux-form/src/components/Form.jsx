import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className='field'>
        <label className='label'> Text </label>
        <div className='control'>
          <Field component='input' name='text' className='input' type='text' placeholder='Text'/>
        </div>
      </div>
      <div className='field'>
        <label className='label'> Email </label>
        <div className='control'>
          <Field component='input' name='email' className='input' type='email' placeholder='username@example.com'/>
        </div>
      </div>
      <div className='field'>
        <label className='label'> Password </label>
        <div className='control'>
          <Field component='input' name='password' className='input' type='password' placeholder='Password'/>
        </div>
      </div>
      <div className='field'>
        <label className='label'>Subject</label>
        <div className='control'>
          <div className='select'>
            <Field component='select' name='select'>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </Field>
          </div>
        </div>
      </div>
      <div className='field'>
        <label className='label'>Textarea</label>
        <div className='control'>
          <Field component='textarea' name='textarea' className='textarea' placeholder='Textarea'/>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <label className='checkbox'>
            <Field component='input' name='checkbox' type='checkbox'/> Checkbox
          </label>
        </div>
      </div>
      <div className='field is-grouped'>
        <div className='control'>
          <button className='button is-link' type='submit'>Submit</button>
        </div>
        <div className='control'>
          <button className='button is-link is-light'>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({ form: 'form' })(Form);
