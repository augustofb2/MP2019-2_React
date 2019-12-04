import React from 'react';
import ReactDOM from 'react-dom';
import Seletor from './Seletor';
import Jogo from '../../backend/jogo/jogo';
import jogo from '../../backend/objetos/jogo';


it('renders without crashing 1', () => {
    const session = new Jogo(jogo);
    const div = document.createElement('div');
    ReactDOM.render(<Seletor session={session} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders without crashing 2', () => {
    const session = new Jogo(jogo);
    session.avancarPeriodo();
    const div = document.createElement('div');
    ReactDOM.render(<Seletor session={session} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing 3', () => {
    const session = new Jogo(jogo);
    session.avancarPeriodo();
    const div = document.createElement('div');
    ReactDOM.render(<Seletor session={session} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

