import * as constants from '../constants';

function todoApp(state = [], action) {
    switch (action.type) {
        case constants.ADD_TODO:
            var newTodo = {
                id: action.id,
                text: action.text,
                completed: false
            };
            return [...state, newTodo];
        case constants.TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.id) {
                    return Object.assign({}, todo, {
                        completed: true
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}

export default todoApp;