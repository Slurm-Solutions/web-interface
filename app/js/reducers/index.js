import { combineReducers } from 'redux';
import orders from './orders';
import clients from './clients';
import focus from './focus';
import settings from './settings';
import timeouts from './timeout';

import { routerReducer } from 'react-router-redux';

const app = combineReducers({
    orders,
    clients,
    timeouts,
    focus,
    settings,
    routing: routerReducer
});

export default app;
