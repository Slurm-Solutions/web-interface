import { combineReducers } from 'redux';
import orders from './orders';
import clients from './clients';
import focus from './focus';
import settings from './settings';

const app = combineReducers({
    orders,
    clients,
    focus,
    settings
});

export default app;
