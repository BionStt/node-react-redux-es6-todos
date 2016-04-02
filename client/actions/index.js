import TOGGLE_TODO from '../constants';
import * as filterConstants from '../constants/filters';

export const setVisibilityFilter = (filter) => {
    return {
        type: filterConstants.SET_VISIBILITY_FILTER,
        filter
    };
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    };
};