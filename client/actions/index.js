import * as constants from '../constants';
import * as filterConstants from '../constants/filters';

let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: constants.ADD_TODO,
        id: nextTodoId++,
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