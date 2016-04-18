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
                 emptyDrink,
                 cancelCancel,
                 confirmBill,
                 confirmCancel }) => {

    const fillDrink_ = (drinkID) => {
        if(order.status == "pending")
            acceptOrder();
        fillDrink(drinkID);
        if (order.drinks.length == 1 + order.drinks.reduce((a, v)=>a+(v.status == 'filled'), 0))
            completeOrder();
    }
    const emptyDrink_ = (drinkID) => {
        if (order.status == "completed")
            acceptOrder();
        emptyDrink(drinkID);
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
            status={order.status}
            confirm={order.confirm}
            alcohol={alcohol}
            total={total}
            drinks={order.drinks}
            verifyOrder={verifyOrder}
            showOrder={showOrder}
            cancelOrder={cancelOrder}
            fillDrink={fillDrink_}
            emptyDrink={emptyDrink_}
            showDrink={showDrink}
            cancelCancel={cancelCancel}
            billOrder={billOrder}
        />
        <ControlBar
            billable={order.status == "completed"}
            total={total}
            confirmCancel={confirmCancel}
            confirmBill={confirmBill}
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
