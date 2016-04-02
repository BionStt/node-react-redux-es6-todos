import * as constants from '../constants';

function todo(state, action) {
    switch (action.type) {
        case constants.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case constants.TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            });

        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case constants.ADD_TODO:
            var newTodo = todo(undefined, action);
            return [...state, newTodo];
        case constants.TOGGLE_TODO:
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state;
    }
};

export default todos