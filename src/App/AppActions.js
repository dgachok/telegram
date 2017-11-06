export const LOADING_STARTED = 'LOADING_STARTED';
export const LOADING_ENDED = 'LOADING_ENDED';

export const LOAD_USER_ACTION = 'LOAD_USER_ACTION';
export const LOADED_USER_ACTION = 'LOADED_USER_ACTION';

export const loadingStarted = () => ({
    type: LOADING_STARTED,
});

export const loadingEnded = () => ({
    type: LOADING_ENDED,
});

export const loadUser = () => ({
    type: LOAD_USER_ACTION,
});

export const loadedUser = (user) => ({
    type: LOADED_USER_ACTION,
    payload: user
});

export const fetchUser = () => {
    return new Promise((resolve, reject) => {
        console.log('fetchUser');
        resolve({name: 'admin', id: 1});
    });
};

