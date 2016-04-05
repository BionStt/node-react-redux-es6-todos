import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import axios from 'axios';

import App from './components/App';
import reducers from './reducers';
import { SHOW_ALL } from './constants/filters';

import { setNextId }  from './actions';

var todos = axios.get('/todos')
    .then(initStore)
    .catch(function (response) {
        console.log(response);
    });


function initStore(response) {

    var initialState = {
        todos: response.data,
        visibilityFilter: SHOW_ALL
    };

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(ReduxPromise)
    );

    if (initialState.todos && initialState.todos.length > 0) {
        setNextId(initialState.todos[initialState.todos.length - 1].id);
    }

    ReactDOM.render(
        <Provider store={store}>
            <App></App>
        </Provider>,
        document.getElementById('mainContainer')
    );

}