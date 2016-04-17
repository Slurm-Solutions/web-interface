import React, { PropTypes } from 'react';
import StatusBar from './StatusBar';
import DrinkList from './DrinkList';
import ControlBar from './ControlBar';

import style from './Order.css'

const Order = ({ order,
                 verifyOrder,
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
    const alcohol = order.drinks.reduce((acc, val) => acc + val.alcoholic, 0);
    const total = `\$${order.drinks.reduce((acc, val) => acc + val.price, 0).toFixed(2)}`;

    return (<div className={style.panel}>
        <StatusBar
            title={order.orderID}
            status={order.status}
            showOrder={showOrder}
            acceptOrder={acceptOrder}
            unacceptOrder={unacceptOrder}
            completeOrder={completeOrder}
        />
        <DrinkList
            verified={order.verified}
            alcohol={alcohol}
            goDelete={order.delete}
            goBill={order.bill}
            total={total}
            drinks={order.drinks}
            verifyOrder={verifyOrder}
            showOrder={showOrder}
            fillDrink={fillDrink_}
            emptyDrink={emptyDrink}
            showDrink={showDrink}
        />
        <ControlBar
            billable={order.status == "completed"}
            cancelOrder={cancelOrder}
            billOrder={billOrder}
            total={total}
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
