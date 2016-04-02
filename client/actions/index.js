export const toggleTodo = (id) => {
    console.log('inside of actions_index - toggleTodo method');
    return {
        type: 'TOGGLE_TODO',
        id
    };
};