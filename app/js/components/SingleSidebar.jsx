import React, { PropTypes } from 'react';

import style from './SingleSidebar.css';

const SingleSidebar = ({ sidebar, children }) => {
    return (
    <div>
        <div className={style.colMask}>
            <div className={style.colRight}>
                <div className={style.contentWrap}>
                    <div className={style.content}>
                        {children}
                    </div>
                </div>
                <div className={style.sidebar}>
                    {sidebar}
                </div>
            </div>
        </div>
        <span style={{clear:"both"}}></span>
    </div>);
};

export default SingleSidebar;
