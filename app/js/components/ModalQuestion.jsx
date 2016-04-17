import React, { PropTypes } from 'react';

import Button from './Button';
import style from './ModalQuestion.css'

const ModalQuestion = ({ accept, cancel, onAccept, onCancel, severe, children }) => {
    return (
    <div className={style.modal}>
        <h2>{children}</h2>
        <div className={style.responseBar}>
            <Button type={severe ? "red":"orange"} onClick={onCancel}>{cancel}</Button>
            <Button type="green" onClick={onAccept} style={{float:"right"}}>{accept}</Button>
        </div>
    </div>);
};

export default ModalQuestion;
