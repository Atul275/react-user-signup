import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Welcome from './Welcome';

it('Login renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Welcome />, div);
});