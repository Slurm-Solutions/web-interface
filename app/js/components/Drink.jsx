import React, { PropTypes } from 'react';

import style from './Drink.css';
import Button from './Button';

const Drink = ({ drink, onClick, fillDrink, emptyDrink }) => {
    const detailsStyle={
        width: "100%",
    }
    const drinkStyle = {
        ...detailsStyle,
        height: "80px",
        marginBottom: "5px",
    }
    const filled = drink.status == "filled";
    return (
    <li className={style.item}>
        <Button type={filled ? "green":"blue"} style={drinkStyle} onClick={filled ? emptyDrink:fillDrink}>{drink.name}</Button>
        <Button type="yellow" onClick={onClick} style={detailsStyle}>details</Button>
    </li>)
};

Drink.propTypes = {
    drink: PropTypes.object.isRequired
};

export default Drink;
