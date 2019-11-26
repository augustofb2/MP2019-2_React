import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/Tema';
import ContentSection from './layout/ContentSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContentSection/>
    </ThemeProvider>
  );
}

export default App;
