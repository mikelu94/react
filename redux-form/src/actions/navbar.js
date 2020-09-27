import { SELECT_NAVBAR_ITEM } from './actionTypes';

export const selectNavbarItem = (navbarItem) => ({
  type: SELECT_NAVBAR_ITEM,
  navbarItem
});
