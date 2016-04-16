import React, { PropTypes } from 'react';
import OrderPane from '../containers/OrderPane';

const OrderList = ({orders}) => {
    return (
        <div>
        {orders.map(order=><OrderPane key={order.orderID} order={order} />)}
        </div>
    );
};

OrderList.propTypes = {

};

export default OrderList;
