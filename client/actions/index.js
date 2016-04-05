import * as constants from '../constants';
import * as filterConstants from '../constants/filters';

export var nextTodoId = 0;

export function setNextId(id){
    nextTodoId = id;
    return id;
}

export const addTodo = (text) => {
    return {
        type: constants.ADD_TODO,
        id: nextTodoId + 1,
        text
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: filterConstants.SET_VISIBILITY_FILTER,
        filter
    };
};

export const toggleTodo = (id) => {
    return {
        type: constants.TOGGLE_TODO,
        id
    };
};