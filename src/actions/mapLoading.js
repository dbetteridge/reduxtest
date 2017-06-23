export function mapLoading(bool) {
    return {
        type: 'MAP_LOADING',
        isLoading: bool
    }
}

export function mapLoaded(map) {
    return {
        type: 'MAP_LOADED',
        map: map
    }
}