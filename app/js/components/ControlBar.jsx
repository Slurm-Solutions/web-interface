import React, { PropTypes } from 'react';

import style from './ControlBar.css';

const ControlBar = () => {
    return (
    <div className={style.bar}>
        <div className={style.cancel}>Delete</div>
        <div className={style.bill}>Bill</div>
        <div className={style.total}>Total: $3.50</div>
        <span style={{clear:"both"}}></span>
    </div>)
};

ControlBar.propTypes = {
};

export default ControlBar;
