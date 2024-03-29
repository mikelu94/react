import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-logger';

import { themeSlice } from './features/theme';
import { navbarSlice } from './features/navbar';

export const store = configureStore({
  reducer: {
    form: formReducer,
    theme: themeSlice.reducer,
    navbar: navbarSlice.reducer,
  },
  middleware: [logger],
});
