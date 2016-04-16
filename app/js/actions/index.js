export * from './client'
export * from './order'

export const clearView = () => {
    return {
        type: 'CLEAR_VIEW'
    }
}

export const updateFullscreen = (fullscreen) => {
    return {
        type: 'UPDATE_FULLSCREEN',
        fullscreen
    }
}
