const defaultState = {};

const focus = (state=defaultState, action) => {
    switch(action.type) {
    case 'VIEW_CLIENT':
        return {
            type: 'client',
            clientID: action.clientID,
            title: `Client: ${action.clientID}`
        };
    case 'VIEW_DRINK':
        return {
            type: 'drink',
            orderID: action.orderID,
            drinkID: action.drinkID,
            title: `Drink: ${action.drinkID} (of ${action.orderID})`
        };
    case 'VIEW_ORDER':
        return {
            type: 'order',
            orderID: action.orderID,
            title: `Order: ${action.orderID}`
        };
    case 'CLEAR_VIEW':
        return defaultState;
    default:
        return state;
    }
};

export default focus;
