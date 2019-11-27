import React from 'react';
import ReactDOM from 'react-dom';
import Acoes from './Acoes';
import jogo from '../../backend/objetos/jogo';
import Jogo from '../../backend/jogo/jogo';

const session = new Jogo(jogo);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Acoes session={session} />, div);
  ReactDOM.unmountComponentAtNode(div);
});