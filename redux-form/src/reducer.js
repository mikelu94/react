import { combineReducers } from 'redux';
import { theme } from './reducers/theme';
import { navbar } from './reducers/navbar';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  form: formReducer,
  theme,
  navbar,
});
