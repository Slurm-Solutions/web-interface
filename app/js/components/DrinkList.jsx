import React, { PropTypes } from 'react';
import Drink from './Drink';
import ModalQuestion from './ModalQuestion';

import style from './DrinkList.css'

const DrinkList = ({ drinks,
                     alcohol,
                     status,
                     confirm,
                     total,

                     showDrink,
                     verifyOrder,
                     showOrder,
                     fillDrink,
                     emptyDrink,
                     billOrder,
                     cancelCancel,
                     cancelOrder }) => {
    let modal_state = '';
    if (!confirm && (alcohol && status == "unverified"))
        modal_state = 'age';
    else if (status == 'completed' && confirm == 'bill')
        modal_state = 'bill'
    else if (confirm == 'delete')
        modal_state = confirm;

    let ulStyle = {};
    let modal;
    if (modal_state)
        ulStyle = {filter: "blur(3px)"};
    switch (modal_state) {
        case 'age':
            modal = (<ModalQuestion
                        accept="Over 21"
                        onAccept={verifyOrder}
                        cancel="Modify Order"
                        onCancel={showOrder}
                        severe={false}
                     >
                     There {alcohol > 1 ? 'are': 'is'} {alcohol} alcoholic
                     drink{alcohol > 1 ? 's':''}.
                     </ModalQuestion>);
            break;
        case 'bill':
            modal = (<ModalQuestion
                        accept={`Charge ${total}`}
                        onAccept={billOrder}
                        cancel="Cancel"
                        onCancel={cancelCancel}
                        severe={true}
                     >
                     Submit bill of {total}?
                     </ModalQuestion>);
            break;
        case 'delete':
            modal = (<ModalQuestion
                        accept="Yes"
                        onAccept={cancelOrder}
                        cancel="No"
                        onCancel={cancelCancel}
                        severe={true}
                     >
                     Delete this order?
                     </ModalQuestion>);
            break;
        default:
            ulStyle = {}
    }

    return (
    <div className={style.drinksPanel}>
        <ul className={style.drinks} style={ulStyle}>
        {drinks.map(drink =>
            <Drink key={drink.drinkID}
                drink={drink}
                fillDrink={()=>fillDrink(drink.drinkID)}
                emptyDrink={()=>emptyDrink(drink.drinkID)}
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
