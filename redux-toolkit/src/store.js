import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { themeSlice } from './features/theme';

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer
  },
  middleware: [logger],
});
