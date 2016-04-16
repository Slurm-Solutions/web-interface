import React, { PropTypes } from 'react';
import Drink from './Drink'

import style from './DrinkList.css'

const DrinkList = ({ drinks }) => {
    return (<ul className={style.drinks}>
        {drinks.map(drink=><Drink key={drink.drinkID} drink={drink} />)}
    </ul>)
};

DrinkList.propTypes = {
    drinks: PropTypes.array.isRequired
};

export default DrinkList;
