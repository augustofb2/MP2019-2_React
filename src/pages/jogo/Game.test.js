import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';


it('renders without crashing 1', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

