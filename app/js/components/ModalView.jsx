import React, { PropTypes } from 'react';

import style from './ModalView.css';

let stopPropagation = (event) => {
    let e = event || window.event;
    e.cancelBubble = true;
    if (e.stopPropagation)
        e.stopPropagation();
}

const ModalView = ({clear, title, children}) => {
    return (
    <div className={style.blur} onClick={clear}>
        <div className={style.content} onClick={stopPropagation}>
            <h2>{title}</h2>
            {children}
        </div>
        <div className={style.close}>x</div>
    </div>);
};

export default ModalView;
