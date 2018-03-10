export const SET_MOVIES = 'SET_MOVIES'

export function setMovies(items) {
    const action = {
        type: SET_MOVIES,
        items
    }
    return action
}