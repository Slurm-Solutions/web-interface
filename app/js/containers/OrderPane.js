import React from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order';
import { setOrderVerified,
         setOrderAccepted,
         setOrderPending,
         setOrderCompleted,
         cancelCancel,
         confirmCancel,
         confirmBill,
         billOrder,
         viewOrder,
         cancelOrder,
         viewDrink,
         setDrinkFilled,
         setDrinkEmpty } from '../actions'

const mapStateToProps = (state, { order }) => {
    return {};
};

const mapDispatchToProps = (dispatch, { order }) => {
    let orderID = order.orderID;
    return {
        verifyOrder: () => dispatch(setOrderVerified(orderID)),
        acceptOrder: () => dispatch(setOrderAccepted(orderID)),
        unacceptOrder: () => dispatch(setOrderPending(orderID)),
        completeOrder: () => dispatch(setOrderCompleted(orderID)),
        billOrder: () => dispatch(billOrder(orderID)),
        showOrder: () => dispatch(viewOrder(orderID)),
        cancelOrder: () => dispatch(cancelOrder(orderID)),
        showDrink: (drinkID) => dispatch(viewDrink(orderID, drinkID)),
        fillDrink: (drinkID) => dispatch(setDrinkFilled(orderID, drinkID)),
        emptyDrink: (drinkID) => dispatch(setDrinkEmpty(orderID, drinkID)),
        confirmBill: () => dispatch(confirmBill(orderID)),
        cancelCancel: () => dispatch(cancelCancel(orderID)),
        confirmCancel: () => dispatch(confirmCancel(orderID)),
    };
};

const OrderPane = connect(
    mapStateToProps,
    mapDispatchToProps
)(Order);

export default OrderPane;
