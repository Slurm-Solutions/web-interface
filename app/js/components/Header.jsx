import React, { PropTypes } from 'react';

import SystemSettingsBar from '../containers/SystemSettingsBar';

import style from './Header.css'

const Header = () => {
    return (
    <div className={style.header}>
        Slurm Solutions
        <SystemSettingsBar />
    </div>)
};

export default Header;
