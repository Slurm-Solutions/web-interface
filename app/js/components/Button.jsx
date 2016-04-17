import React, { PropTypes } from 'react';

import cssStyle from './Button.css';

const Button = ({children, type='blue', enabled=true, style={}, onClick}) => {
    let otherProps = {};
    if (!enabled) {
        otherProps = {disabled: 'disabled'};
    }
    let className = '';
    switch (type) {
        case 'green':
            className = cssStyle.green;
            break;
        case 'blue':
            className = cssStyle.blue;
            break;
        case 'orange':
            className = cssStyle.orange;
            break;
        case 'yellow':
            className = cssStyle.yellow;
            break;
        case 'red':
            className = cssStyle.red;
            break;
    }
    return (<button
                className={className}
                type="button"
                onClick={onClick}
                style={style}
                {...otherProps}
            >
                {children}
            </button>)
};

export default Button;
