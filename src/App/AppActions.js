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


export const loadedUser = (user) => ({
    type: LOADED_USER_ACTION,
    payload: user
});

export const fetchUser = () => {
    console.log('fetchUser');
    return new Promise((resolve, reject) => {
        resolve({name: 'admin', id: 1});
    });
};

