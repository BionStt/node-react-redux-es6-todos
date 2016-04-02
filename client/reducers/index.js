import { combineReducers } from 'redux'
import todosReducer from './todos_reducer';


const todoApp = combineReducers({
    todos: todosReducer
});

export default todoApp;