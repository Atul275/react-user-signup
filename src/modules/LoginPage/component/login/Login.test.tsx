import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Login from './Login';

it('Login renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});