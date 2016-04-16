import React from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order';

const mapStateToProps = (state, { order }) => {
    return {};
};

const mapDispatchToProps = (dispatch, { order }) => {
    let orderID = order.orderID;
    return {
        acceptOrder: () => setOrderAccepted(orderID),
        unacceptOrder: () => setOrderPending(orderID),
        completeOrder: () => setOrderCompleted(orderID),
        billOrder: () => billOrder(orderID),
        showOrder: () => viewOrder(orderID),
        cancelOrder: () => cancelOrder(orderID),
        showDrink: (drinkID) => viewDrink(orderID, drinkID),
        fillDrink: (drinkID) => setDrinkFilled(orderID, drinkID),
        emptyDrink: (drinkID) => setDrinkEmpty(orderID, drinkID)
    };
};

const OrderPane = connect(
    mapStateToProps,
    mapDispatchToProps
)(Order);

export default OrderPane;
