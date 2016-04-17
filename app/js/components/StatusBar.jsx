import React, { PropTypes } from 'react';

import style from './StatusBar.css'

const StatusBar = ({title}) => {
    return (
    <div className={style.bar}>
        <span className={style.title}>{title}</span>
        <span className={style.ready}><label><input type="checkbox" /> Ready</label></span>
        <span className={style.accepted}><label><input type="checkbox" /> In Progress</label></span>
    </div>)
};

StatusBar.propTypes = {
};

export default StatusBar;
