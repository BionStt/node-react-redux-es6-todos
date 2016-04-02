import { combineReducers } from 'redux'
import todosReducer from './todos_reducer';
import visibilityFilterReducer from './visibilityFilter_reducer';


const todoApp = combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
});

export default todoApp;