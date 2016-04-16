import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { updateFullscreen } from './actions';
import app from './reducers';
import App from './components/App';

import '../css/main.css';

let store = createStore(app, undefined,
    window.devToolsExtension ? window.devToolsExtension() : undefined);

ReactDOM.render(
    <Provider store={store}>
        <App />
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
