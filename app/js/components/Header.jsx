import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import style from './Header.css'

const Header = ({children}) => {
    return (
    <div className={style.header}>
        <Link to="/">Slurm Solutions</Link>
        <span className={style.menu}>{children}</span>
    </div>)
};

export default Header;
