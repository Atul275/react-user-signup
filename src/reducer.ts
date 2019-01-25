import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './reducers/app';
import payroll from './reducers/payroll';

const rootReducer = combineReducers({
    app,
    payroll,
    routing: routerReducer
});

export default rootReducer;