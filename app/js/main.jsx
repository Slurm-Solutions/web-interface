import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { updateFullscreen } from './actions';
import app from './reducers';
import App from './components/pages/App';
import Index from './components/pages/Index';
import Root from './components/pages/Root';
import Menu from './components/pages/Menu';
import Profile from './components/pages/Profile';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import '../css/main.css';

let store = createStore(app, undefined,
    window.devToolsExtension ? window.devToolsExtension() : undefined);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Root}>
                <IndexRoute component={Index} />
                <Route path="menu" component={Menu} />
                <Route path="profile" component={Profile} />
            </Route>
            <Route path="/orders" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

document.addEventListener(
    "fullscreenchange",
    () => store.dispatch(updateFullscreen(document.fullscreen)),
    false);

document.addEventListener(
    "mozfullscreenchange",
    () => store.dispatch(updateFullscreen(document.mozFullScreen)),
    false);

document.addEventListener(
    "webkitfullscreenchange",
    () => store.dispatch(updateFullscreen(document.webkitIsFullScreen)),
    false);

document.addEventListener(
    "msfullscreenchange",
    () => store.dispatch(updateFullscreen(document.msFullscreenElement)),
    false);
