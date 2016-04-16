export const addClient = (clientID) => {
    return {
        type: 'ADD_CLIENT',
        clientID
    };
};

export const removeClient = (clientID) => {
    return {
        type: 'REMOVE_CLIENT',
        clientID
    };
};

export const banClient = (clientID, timeout) => {
    return {
        type: 'BAN_CLIENT',
        clientID,
        timeout
    };
};

export const viewClient = (clientID) => {
    return {
        type: 'VIEW_CLIENT',
        clientID
    };
};
