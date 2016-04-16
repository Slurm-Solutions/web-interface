import React, { PropTypes } from 'react';

import style from './StatusBar.css'

const StatusBar = () => {
    return (<div className={style.bar}><span className={style.title}>status-bar</span></div>)
};

StatusBar.propTypes = {
};

export default StatusBar;
