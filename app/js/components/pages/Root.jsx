import React from 'react';
import { Link } from 'react-router';
import Header from '../Header';
import style from './Root.css';

const Root = ({children}) => (
    <div>
        <Header>
            <Link to="/orders">orders</Link>
            <Link to="/menu">menu</Link>
            <Link to="/profile">profile</Link>
            <Link to="/signout">signout</Link>
        </Header>
        <div className={style.content}>
        {children}
        </div>
    </div>
);

export default Root;
