import React from 'react';
import ReactDOM from 'react-dom';
import ListaEstagios from './ListaEstagios';
import jogo from '../../backend/objetos/jogo';
import Jogo from '../../backend/jogo/jogo';

const session = new Jogo(jogo);

it('renders without crashing', () => {
  const div = document.createElement('div');
  session.iniciarSemestre();
  session.iniciarSemestre();
  ReactDOM.render(<ListaEstagios session={session} />, div);
  ReactDOM.unmountComponentAtNode(div);
});