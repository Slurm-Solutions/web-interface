import React, { PropTypes } from 'react';

import style from './Drink.css';

const Drink = ({ drink }) => {
    return (<li className={style.drink}>{drink.name}</li>)
};

Drink.propTypes = {
    drink: PropTypes.object.isRequired
};

export default Drink;
