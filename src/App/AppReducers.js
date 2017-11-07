import {combineReducers} from 'redux';
import {LOADING_STARTED, LOADING_ENDED, LOAD_USER_ACTION, LOADED_USER_ACTION} from "./AppActions";

const loading = (state = false, action) => {
    switch (action.type) {
        case LOADING_STARTED:
            return true;
        case LOADING_ENDED:
            return false;
        default:
            return state;
    }
};

const user = (state = {}, action) => {
    switch (action.type) {
        case LOAD_USER_ACTION:
            return true;
        case LOADED_USER_ACTION:
            return {...state, ...action.payload};
        default:
            return state;
    }
};


export const reducer = combineReducers({
    user,
    loading,
});