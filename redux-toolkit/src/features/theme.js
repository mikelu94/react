import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: localStorage.getItem('theme') || 'dark',
  reducers: {
    toggleTheme(state) {
      if (state === 'dark') {
        localStorage.setItem('theme', 'light');
        return 'light';
      }
      if (state === 'light') {
        localStorage.setItem('theme', 'dark');
        return 'dark';
      }
      return state;
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export const themeSelector = (state) => state.theme;
