import React, { PropTypes } from 'react';

import style from './StatusBar.css'

const StatusBar = ({title, status, showOrder, acceptOrder, unacceptOrder, completeOrder}) => {
    let readyEnabled = {disabled:'disabled'};
    let progressEnabled = {disabled:'disabled'};

    switch (status) {
        case 'completed':
            readyEnabled['checked'] = true
        case 'accepted':
            progressEnabled['checked'] = true
            delete readyEnabled['disabled']
        case 'pending':
            delete progressEnabled['disabled']
    }

    return (
    <div className={style.bar}>
        <span className={style.title}>{title}</span>
        <span className={style.ready}><label><input type="checkbox" {...readyEnabled} onClick={readyEnabled.checked? acceptOrder:completeOrder}/> Ready</label></span>
        <span className={style.accepted}><label><input type="checkbox" {...progressEnabled} onClick={progressEnabled.checked ? unacceptOrder:acceptOrder}/> In Progress</label></span>
    </div>)
};

StatusBar.propTypes = {
};

export default StatusBar;
