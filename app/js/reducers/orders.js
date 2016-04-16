const order = (state, action) => {
    switch(action.type) {
    case 'ADD_ORDER':
        return action.order
    default:
        return state
    }
}

let junk = (i) => ({
        drinks: [
            {
                drinkID: 'foo',
                name: 'fooo',
                status: 'unfilled'
            },
            {
                drinkID: 'foao',
                name: 'fooo',
                status: 'unfilled'
            },
            {
                drinkID: 'fovo',
                name: 'fooo',
                status: 'unfilled'
            },
            {
                drinkID: 'feoo',
                name: 'fooo',
                status: 'unfilled'
            },
            {
                drinkID: 'bar',
                name: 'barr',
                status: 'unfilled'
            },
        ],
        status: 'pending',
        verified: true,
        orderID: 'bazzle-dazzle' + i
});

let defaultOrders = [
    {
        drinks: [
            {
                drinkID: 'foo',
                name: 'fooo',
                status: 'unfilled'
            },
            {
                drinkID: 'bar',
                name: 'This is a very long drink name.',
                status: 'unfilled'
            },
        ],
        status: 'pending',
        verified: true,
        orderID: 'bazzle-dazzle'
    },
    {
        drinks: [
            {
                drinkID: 'daf',
                name: 'daff',
                status: 'unfilled'
            },
            {
                drinkID: 'zav',
                name: 'zavv',
                status: 'unfilled'
            },
        ],
        status: 'pending',
        verified: false,
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

    case 'CANCEL_ORDER':
        const newState = [...state];
        const index = newState.findIndex(e => e.orderID === action.orderID);
        newState.splice(1, index);
        return newState;
    default:
        return state;
    }
};


export default orders;
