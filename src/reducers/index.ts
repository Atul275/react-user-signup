import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './app';
import payroll from './payroll';

export * from './app';
export * from './payroll';

const rootReducer = combineReducers({
    app,
    payroll,
    routing: routerReducer
});

export default rootReducer;