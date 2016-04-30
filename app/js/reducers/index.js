import { combineReducers } from 'redux';
import orders from './orders';
import clients from './clients';
import focus from './focus';
import settings from './settings';
import timeouts from './timeout';

const app = combineReducers({
    orders,
    clients,
    timeouts,
    focus,
    settings
});

export default app;
