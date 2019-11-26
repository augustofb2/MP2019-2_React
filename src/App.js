import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/Tema';
import MainMenu from './pages/main-menu/MainMenu';
import Header from './layout/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Game from './pages/jogo/Game';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <MainMenu/>
          </Route>
          <Route path="/jogo">
            <Game/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
