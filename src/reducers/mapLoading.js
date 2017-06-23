const mapLoadingInitialState = {}
export const mapLoading = (state = mapLoadingInitialState, action) => {
    switch (action.type) {
        case 'MAP_LOADING':
            return action.isLoading;
        case 'MAP_LOADED':
            return action.map;
        default:
            return state
    }
}