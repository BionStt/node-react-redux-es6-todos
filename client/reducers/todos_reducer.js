import * as constants from '../constants';
import axios from 'axios';

function postTodo(todo) {
    axios.post('/todos', todo)
        .then(function (response) {
            //console.log(response);
        })
        .catch(function (response) {
            console.log('postTodo:', response);
        });
}

function updateTodo(todo) {
    axios.put(`/todos/${todo.id}`, todo)
        .then(function (response) {
            //console.log(response);
        })
        .catch(function (response) {
            console.log('postTodo:', response);
        });
}


function deleteTodo(id) {
    axios.delete(`/todos/${id}`)
        .then(function (response) {
            //console.log(response);
        })
        .catch(function (response) {
            console.log('deleteTodo:', response);
        });
}

function todo(state, action) {
    switch (action.type) {
        case constants.ADD_TODO:
            var todo = {
                id: action.id,
                text: action.text,
                completed: false
            };
            postTodo(todo);
            return todo;
        case constants.TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            var newObject = Object.assign({}, state, {
                completed: !state.completed
            });
            updateTodo(newObject);
            return newObject;
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
        case constants.DELETE_TODO:
            return state.filter(t => {
                if (t.id === action.id) {
                    deleteTodo(action.id);
                    return false;
                }
                return true;
            });

        default:
            return state;
    }
}

export default todos