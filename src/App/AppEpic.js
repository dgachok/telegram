import {combineEpics} from 'redux-observable';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/fromPromise';
import {
    loadingStarted, loadingEnded, loadedUser, fetchUser,
    LOAD_USER_ACTION, LOADED_USER_ACTION
} from "./AppActions";

const userEpic = ($actions) => {
    return $actions.ofType(LOAD_USER_ACTION)
        .mergeMap(() => {
            return Observable
                .fromPromise(fetchUser())
                .map(loadedUser)
        });
};

const loadingStartedEpic = ($actions) => {
    return $actions.ofType(LOAD_USER_ACTION)
        .map(loadingStarted);
};

const loadingEndedEpic = ($actions) => {
    return $actions.ofType(LOADED_USER_ACTION)
        .map(loadingEnded);
};


export const epic = combineEpics(
    userEpic,
    loadingStartedEpic,
    loadingEndedEpic
);
