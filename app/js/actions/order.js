export const addOrder = (order) => {
    return {
        type: "ADD_ORDER",
        order
    };
};

export const modifyOrder = (orderID, changes) => {
    return {
        type: "MODIFY_ORDER",
        orderID,
        changes
    };
};

export const cancelCancel = (orderID) => {
    return {
        type: "CANCEL_CANCEL",
        orderID
    }
}

export const confirmCancel = (orderID) => {
    return {
        type: "CONFIRM_CANCEL",
        orderID
    }
}

export const confirmBill = (orderID) => {
    return {
        type: "CONFIRM_BILL",
        orderID
    }
}

export const cancelOrder = (orderID) => {
    return {
        type: "CANCEL_ORDER",
        orderID
    };
};

export const billOrder = (orderID) => {
    return {
        type: "BILL_ORDER",
        orderID
    };
};

export const setOrderVerified = (orderID) => {
    return {
        type: "ORDER_VERIFIED",
        orderID
    };
};

export const setOrderPending = (orderID) => {
    return {
        type: "ORDER_PENDING",
        orderID
    };
};

export const setOrderAccepted = (orderID) => {
    return {
        type: "ORDER_ACCEPTED",
        orderID
    };
};

export const setOrderCompleted = (orderID) => {
    return {
        type: "ORDER_FILLED",
        orderID
    }
};

export const viewOrder = (orderID) => {
    return {
        type: "VIEW_ORDER",
        orderID
    }
}

export const setDrinkFilled = (orderID, drinkID) => {
    return {
        type: "DRINK_FILLED",
        orderID,
        drinkID
    };
};

export const setDrinkEmpty = (orderID, drinkID) => {
    return {
        type: "DRINK_EMPTY",
        orderID,
        drinkID
    };
};

export const viewDrink = (orderID, drinkID) => {
    return {
        type: "VIEW_DRINK",
        orderID,
        drinkID
    }
}
