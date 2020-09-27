import { SELECT_NAVBAR_ITEM } from '../actions/actionTypes';

const initialState = 'Home';

export const navbar = (state=initialState, action) => {
  switch (action.type) {
    case SELECT_NAVBAR_ITEM:
      return action.navbarItem;
    default:
      return state;
  }
};
