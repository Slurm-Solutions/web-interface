import React, { PropTypes } from 'react';
import StatusBar from './StatusBar';
import DrinkList from './DrinkList';
import ControlBar from './ControlBar';

import style from './Order.css'

const Order = ({ order,
                 acceptOrder,
                 unacceptOrder,
                 completeOrder,
                 billOrder,
                 showOrder,
                 cancelOrder,
                 showDrink,
                 fillDrink,
                 emptyDrink }) => {

    const fillDrink_ = (drinkID) => {
        if(order.status == "pending")
            acceptOrder();
        fillDrink(drinkID);
    }

    return (<div className={style.panel}>
        <StatusBar
            status={order.status}
            showOrder={showOrder}
            acceptOrder={acceptOrder}
            unacceptOrder={unacceptOrder}
            completeOrder={completeOrder}
        />
        <DrinkList
            drinks={order.drinks}
            fillDrink={fillDrink_}
            emptyDrink={emptyDrink}
            showDrink={showDrink}
        />
        <ControlBar
            billable={order.status == "completed"}
            cancelOrder={cancelOrder}
            billOrder={billOrder}
        />
    </div>)
};

Order.propTypes = {
    order: PropTypes.object.isRequired,
    acceptOrder: PropTypes.func.isRequired,
    unacceptOrder: PropTypes.func.isRequired,
    completeOrder: PropTypes.func.isRequired,
    billOrder: PropTypes.func.isRequired,
    showOrder: PropTypes.func.isRequired,
    cancelOrder: PropTypes.func.isRequired,
    showDrink: PropTypes.func.isRequired,
    fillDrink: PropTypes.func.isRequired,
    emptyDrink: PropTypes.func.isRequired
};

export default Order;
