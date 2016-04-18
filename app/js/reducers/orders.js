const reduceOrder = (state, action) => {
    switch(action.type) {
    case 'ADD_ORDER':
        return action.order
    case 'ORDER_VERIFIED':
    case 'ORDER_PENDING':
        return {...state, status: "pending"}
    case 'ORDER_ACCEPTED':
        return {...state, status: "accepted"}
    case 'ORDER_FILLED':
        return {...state, status: "completed", confirm:''}
    case 'CONFIRM_CANCEL':
        return {...state, confirm: 'delete'}
    case 'CONFIRM_BILL':
        return {...state, confirm: 'bill'}
    case 'CANCEL_CANCEL':
        return {...state, confirm: ''}
    case 'DRINK_FILLED':
        return {
            ...state,
            drinks: state.drinks.map(
                (drink) =>
                    drink.drinkID == action.drinkID
                    ? {...drink, status:'filled'} : drink
            )}
    case 'DRINK_EMPTY':
        return {
            ...state,
            drinks: state.drinks.map(
                (drink) =>
                    drink.drinkID == action.drinkID
                    ? {...drink, status:'unfilled'} : drink
            )}

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
        status: 'unverified',
        confirm: '',
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
        status: 'unverified',
        verified: true,
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
        confirm: '',
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
    case 'CANCEL_CANCEL':
    case 'CONFIRM_CANCEL':
    case 'CONFIRM_BILL':
    case 'ORDER_VERIFIED':
    case 'ORDER_ACCEPTED':
    case 'ORDER_PENDING':
    case 'ORDER_FILLED':
    case 'DRINK_FILLED':
    case 'DRINK_EMPTY':
        return state.map((order)=>{
            if (order.orderID == action.orderID)
                return reduceOrder(order, action)
            return order
        })
    case 'BILL_ORDER':
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
