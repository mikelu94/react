import { TOGGLE_THEME } from '../actions/actionTypes';

export const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      if (state === 'dark') {
        localStorage.setItem('theme', 'light');
        return 'light';
      }
      else if (state === 'light') {
        localStorage.setItem('theme', 'dark');
        return 'dark';
      }
      return state;
    default:
      return state;
  }
};
