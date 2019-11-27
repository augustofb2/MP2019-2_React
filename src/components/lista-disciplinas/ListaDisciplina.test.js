import React from 'react';
import ReactDOM from 'react-dom';
import ListaDisciplina from './ListaDisciplinas';
import jogo from '../../backend/objetos/jogo';
import Jogo from '../../backend/jogo/jogo';

const session = new Jogo(jogo);

it('renders without crashing', () => {
  const div = document.createElement('div');
  session.iniciarSemestre();
  ReactDOM.render(<ListaDisciplina session={session} />, div);
  ReactDOM.unmountComponentAtNode(div);
});