import React, { useReducer } from 'react';
import ThemeContext from '../contexts/theme';
import { themeReducer } from '../reducers/theme';
import Navbar from './Navbar';
import Section from './Section';

function App() {
  const [theme, dispatchTheme ] = useReducer(themeReducer, localStorage.getItem('theme') || 'dark');
  return (
    <ThemeContext.Provider value={{ theme, dispatchTheme }}>
      <Navbar/>
      <Section/>
    </ThemeContext.Provider>
  );
}

export default App;
