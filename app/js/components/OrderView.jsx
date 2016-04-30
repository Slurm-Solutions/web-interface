import React, { PropTypes } from 'react';

const OrderView = ({order}) => {
    return (<div>
        <h3>Status: {order.status}</h3>
        <h3>Drinks:</h3>
        <ul>
        {order.drinks.map((drink)=>(<li key={drink.drinkID}>{drink.name}</li>))}
        </ul>
        <h3>Price: {`\$${order.drinks.reduce((acc, val) => acc + val.price, 0).toFixed(2)}`}</h3>
        [Editing the order is still under construction!]
    </div>);
};

export default OrderView;
