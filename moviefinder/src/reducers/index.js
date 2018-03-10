import { combineReducers } from 'redux'
import { SET_MOVIES} from '../actions'


function movies(state = [], action) {
    switch (action.type) {
        case SET_MOVIES:
            return action.items;
        default:
            return state;
    }
}

const rootReducer = combineReducers({movies})

export default rootReducer


