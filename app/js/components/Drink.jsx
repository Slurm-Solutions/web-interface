import React, { PropTypes } from 'react';

import style from './Drink.css';

const Drink = ({ drink, onClick }) => {
    return (
    <li className={style.item}>
        <div className={style.button}>{drink.name}</div>
        <div className={style.details} onClick={onClick}>details</div>
    </li>)
};

Drink.propTypes = {
    drink: PropTypes.object.isRequired
};

export default Drink;
