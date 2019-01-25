import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Forgot from './Forgot';

it('Login renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Forgot />, div);
});