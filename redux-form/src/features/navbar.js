import { createSlice } from '@reduxjs/toolkit';

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: 'Home',
  reducers: {
    selectNavbarItem(state, action) {
      console.log(action)
      return action.payload;
    }
  }
});

export const { selectNavbarItem } = navbarSlice.actions;
export const navbarSelector = (state) => state.navbar;
