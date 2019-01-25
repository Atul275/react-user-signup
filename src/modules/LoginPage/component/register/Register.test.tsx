import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Register from './Register';

it('Login renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register />, div);
});