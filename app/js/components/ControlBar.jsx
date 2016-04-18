import React, { PropTypes } from 'react';

import Button from './Button';

import style from './ControlBar.css';

const ControlBar = ({total, confirmCancel, confirmBill, billable}) => {
    const width = "75px";
    return (
    <div className={style.bar}>
        <Button type="red" style={{width, padding: "2px 0", marginTop: "4px"}} onClick={confirmCancel}>Delete</Button>
        <Button type="green" style={{float:'right', width}} onClick={confirmBill} enabled={billable}>Bill</Button>
        <div className={style.total}>Total: {total}</div>
        <span style={{clear:"both"}}></span>
    </div>)
};

ControlBar.propTypes = {
};

export default ControlBar;
