import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/Tema';
import ContentSection from './layout/ContentSection';
import MainMenu from './pages/main-menu/MainMenu';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContentSection>
        <MainMenu/>
      </ContentSection>
    </ThemeProvider>
  );
}

export default App;
