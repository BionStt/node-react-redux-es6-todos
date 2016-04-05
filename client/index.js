import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/App';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

import * as filterConstants from './constants/filters';
import axios from 'axios';

var todos = axios.get('/todos')
    .then(initStore)
    .catch(function (response) {
        console.log(response);
    });


function initStore(response) {

    var initialState = {
        todos: response.data,
        visibilityFilter: filterConstants.SHOW_ALL
    };

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(ReduxPromise)
    );

    ReactDOM.render(
        <Provider store={store}>
            <App></App>
        </Provider>,
        document.getElementById('mainContainer')
    );
}