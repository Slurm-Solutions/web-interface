import React, { PropTypes } from 'react';

import Button from './Button';

import style from './ControlBar.css';

const ControlBar = ({total, cancelOrder}) => {
    const width = "75px";
    return (
    <div className={style.bar}>
        <Button type="red" style={{width, padding: "2px 0", marginTop: "4px"}} onClick={cancelOrder}>Delete</Button>
        <Button type="green" style={{float:'right', width}}>Bill</Button>
        <div className={style.total}>Total: {total}</div>
        <span style={{clear:"both"}}></span>
    </div>)
};

ControlBar.propTypes = {
};

export default ControlBar;
