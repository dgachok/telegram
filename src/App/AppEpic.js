import {combineEpics} from 'redux-observable';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concat';
import {
    loadingStarted, loadedUser, fetchUser, loadingEnded
} from "./AppActions";

const spinner = (funcion) => {
    return Observable
        .concat(
            Observable.of(loadingStarted()),
            funcion,
            Observable.of(loadingEnded())
        )
};

const userEpic = () => {
    return spinner(
        Observable
            .fromPromise(fetchUser())
            .delay(5000)
            .map(loadedUser)
    );
};

export const epic = combineEpics(
    userEpic
);
