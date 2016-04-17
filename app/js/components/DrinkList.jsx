import React, { PropTypes } from 'react';
import Drink from './Drink';
import ModalQuestion from './ModalQuestion';

import style from './DrinkList.css'

const DrinkList = ({ drinks, showDrink, alcohol, goBill, goDelete, verified, total, verifyOrder, showOrder }) => {
    let ulStyle = {};
    let modal;
    if ((alcohol && !verified) || goBill || goDelete)
        ulStyle = {filter: "blur(3px)"};

    if (alcohol && !verified)
        modal = (<ModalQuestion
                    accept="Over 21 - Continue"
                    onAccept={verifyOrder}
                    cancel="Modify Order"
                    onCancel={showOrder}
                    severe={false}
                 >
                 There {alcohol > 1 ? 'are': 'is'} {alcohol} alcoholic
                 drink{alcohol > 1 ? 's':''}.
                 </ModalQuestion>);
    else if (goBill)
        modal = (<ModalQuestion
                    accept={`Charge ${total}`}
                    onAccept={()=>{}}
                    cancel="Cancel"
                    onCancel={()=>{}}
                    severe={true}
                 >
                 Submit bill of {total}?
                 </ModalQuestion>);
     else if (goDelete)
         modal = (<ModalQuestion
                     accept="Yes"
                     onAccept={()=>{}}
                     cancel="No"
                     onCancel={()=>{}}
                     severe={true}
                  >
                  Delete this order?
                  </ModalQuestion>);
    return (
    <div className={style.drinksPanel}>
        <ul className={style.drinks} style={ulStyle}>
        {drinks.map(drink =>
            <Drink key={drink.drinkID}
                drink={drink}
                onClick={ () => showDrink(drink.drinkID) }
            />)
        }
        </ul>
        {modal}
    </div>)
};

DrinkList.propTypes = {
    drinks: PropTypes.array.isRequired
};

export default DrinkList;
