const defaultState = {
    fullscreen: false,
    fullscreenEnabled: true
};

const settings = (state = defaultState, action) => {
    switch (action.type) {
    case 'UPDATE_FULLSCREEN':
        return { ...state, fullscreen: action.fullscreen };
    default:
        return state;
    }
};

export default settings;
