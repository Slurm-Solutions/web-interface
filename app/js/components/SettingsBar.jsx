import React, { PropTypes } from 'react';

import style from './SettingsBar.css'

const goFullscreen = () => {
    let elem = document.getElementById("root");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
}

const exitFullscreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

const SettingsBar = ({settings}) => {
    return (<span className={style.menu}>
        {settings.fullscreenEnabled ? (settings.fullscreen ?
                <i title="Exit Fullscreen" className="fa fa-compress" aria-hidden="true" onClick={exitFullscreen}></i>
                :
                <i title="Enter Fullscreen" className="fa fa-expand" aria-hidden="true" onClick={goFullscreen}></i>)
            :
            undefined
        }
        <i title="Analytics & Reports" className="fa fa-bar-chart" aria-hidden="true"></i>
        <i title="Settings" className="fa fa-gear" aria-hidden="true"></i>
    </span>)
};

export default SettingsBar;
