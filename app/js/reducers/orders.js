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

let defaultOrders = [
    {
        drinks: [
            {
                drinkID: '1',
                name: 'Something in the Whey',
                status: 'unfilled',
                alcoholic: true,
                price: 5.98
            },
            {
                drinkID: '2',
                name: 'PBR',
                status: 'unfilled',
                alcoholic: true,
                price: 2.99
            },
            {
                drinkID: '3',
                name: 'Pespi',
                status: 'unfilled',
                alcoholic: false,
                price: 1.99
            },
        ],
        status: 'unverified',
        confirm: '',
        orderID: 'Perilous Pineapple'
    },
    {
        drinks: [
            {
                drinkID: '1',
                name: 'Mountain Dew',
                status: 'unfilled',
                alcoholic: false,
                price: 1.99
            },
        ],
        status: 'pending',
        confirm: '',
        orderID: 'Intrepid Boombox'
    },
    {
        drinks: [
            {
                drinkID: '1',
                name: '"Loaded" Bloody Mary',
                status: 'unfilled',
                alcoholic: true,
                price: 6.99
            },
            {
                drinkID: '2',
                name: '"Loaded" Bloody Mary',
                status: 'unfilled',
                alcoholic: true,
                price: 6.99
            },
            {
                drinkID: '3',
                name: '"Loaded" Bloody Mary',
                status: 'unfilled',
                alcoholic: true,
                price: 6.99
            }
        ],
        status: 'unverified',
        confirm: '',
        orderID: 'Elastic Orange'
    },
    {
        drinks: [
            {
                drinkID: '1',
                name: 'Pespi',
                status: 'unfilled',
                alcoholic: false,
                price: 1.99
            },
            {
                drinkID: '2',
                name: 'Pespi',
                status: 'unfilled',
                alcoholic: false,
                price: 1.99
            },
            {
                drinkID: '3',
                name: 'Coke',
                status: 'unfilled',
                alcoholic: false,
                price: 1.99
            },
        ],
        status: 'pending',
        confirm: '',
        orderID: 'Loud Pineapple'
    },
    {
        drinks: [
            {
                drinkID: '1',
                name: 'Something in the Whey',
                status: 'unfilled',
                alcoholic: true,
                price: 5.98
            },
            {
                drinkID: '2',
                name: 'PBR',
                status: 'unfilled',
                alcoholic: true,
                price: 2.99
            },
            {
                drinkID: '3',
                name: 'PBR',
                status: 'unfilled',
                alcoholic: true,
                price: 2.99
            },
            {
                drinkID: '4',
                name: 'PBR',
                status: 'unfilled',
                alcoholic: true,
                price: 2.99
            },
        ],
        status: 'unverified',
        confirm: '',
        orderID: 'Regrettable Panda'
    },
]

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
