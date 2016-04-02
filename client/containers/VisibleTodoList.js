import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

import * as filterConstants from '../constants/filters';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case filterConstants.SHOW_ALL:
            return todos;
        case filterConstants.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case filterConstants.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;