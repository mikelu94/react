import { TOGGLE_THEME } from '../actions/actionTypes';

const initialState = localStorage.getItem('theme') || 'dark';

export const theme = (state=initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      if (state === 'dark') {
        localStorage.setItem('theme', 'light');
        return 'light';
      }
      if (state === 'light') {
        localStorage.setItem('theme', 'dark');
        return 'dark';
      }
      return state;
    default:
      return state;
  }
};
