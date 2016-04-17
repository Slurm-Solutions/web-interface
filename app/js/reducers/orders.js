const reduceOrder = (state, action) => {
    switch(action.type) {
    case 'ADD_ORDER':
        return action.order
    case 'ORDER_VERIFIED':
        return {...state, verified: true}

    default:
        return state
    }
}

let junk = (i) => ({
        drinks: [
            {
                drinkID: 'foo',
                name: 'fooo',
                status: 'unfilled',
                alcoholic: true,
                price: 3.5
            },
            {
                drinkID: 'foao',
                name: 'fooo',
                status: 'unfilled',
                alcoholic: true,
                price: 3.5
            },
            {
                drinkID: 'fovo',
                name: 'fooo',
                status: 'unfilled',
                alcoholic: true,
                price: 3.5
            },
            {
                drinkID: 'feoo',
                name: 'fooo',
                status: 'unfilled',
                alcoholic: true,
                price: 3.5
            },
            {
                drinkID: 'bar',
                name: 'barr',
                status: 'unfilled',
                alcoholic: true,
                price: 3.5
            },
        ],
        status: 'pending',
        verified: false,
        delete: false,
        bill: false,
        orderID: 'bazzle-dazzle' + i
});

let defaultOrders = [
    {
        drinks: [
            {
                drinkID: 'foo',
                name: 'fooo',
                status: 'unfilled',
                alcoholic: false,
                price: 3.5
            },
            {
                drinkID: 'bar',
                name: 'This is a very long drink name.',
                status: 'unfilled',
                alcoholic: true,
                price: 3.5
            },
        ],
        status: 'pending',
        verified: true,
        delete: false,
        bill: false,
        orderID: 'bazzle-dazzle'
    },
    {
        drinks: [
            {
                drinkID: 'daf',
                name: 'daff',
                status: 'unfilled',
                alcoholic: false,
                price: 3.5
            },
            {
                drinkID: 'zav',
                name: 'zavv',
                status: 'unfilled',
                alcoholic: false,
                price: 3.5
            },
        ],
        status: 'pending',
        verified: false,
        delete: false,
        bill: false,
        orderID: 'sazzle-bazzle'
    }
]

defaultOrders.push(junk(1));
defaultOrders.push(junk(2));
defaultOrders.push(junk(3));
defaultOrders.push(junk(4));
defaultOrders.push(junk(5));

const orders = (state=defaultOrders, action) => {
    switch(action.type) {
    case 'ADD_ORDER':
        return [...state, order(undefined, action)]
    case 'ORDER_VERIFIED':
        return state.map((order)=>{
            if (order.orderID == action.orderID)
                return reduceOrder(order, action)
            return order
        })

    case 'CANCEL_ORDER':
        const newState = [...state];
        const index = newState.findIndex(e => e.orderID === action.orderID);
        newState.splice(index, 1);
        return newState;
    default:
        return state;
    }
};


export default orders;
