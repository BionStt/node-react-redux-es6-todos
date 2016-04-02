import { combineReducers } from 'redux'
import todos from './todos_reducer';
import visibilityFilter from './visibilityFilter_reducer';


const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;