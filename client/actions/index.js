import TOGGLE_TODO from '../constants';

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    };
};