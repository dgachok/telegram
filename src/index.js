import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware} from 'redux';
import App from './App/AppContainer';
import {reducer} from './App/AppReducers';
import { BrowserRouter as Router } from 'react-router-dom';

//redux observable
import { createEpicMiddleware } from 'redux-observable';
import {epic} from './App/AppEpic';

//thunk
import thunk from 'redux-thunk';


const epicMiddleware = createEpicMiddleware(epic);

const store = createStore(reducer,  applyMiddleware(thunk, epicMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
