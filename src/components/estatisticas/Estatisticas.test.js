import React from 'react';
import ReactDOM from 'react-dom';
import Estatisticas from './Estatisticas';
import jogo from '../../backend/objetos/jogo';
import Jogo from '../../backend/jogo/jogo';

const session = new Jogo(jogo);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Estatisticas session={session} />, div);
  ReactDOM.unmountComponentAtNode(div);
});