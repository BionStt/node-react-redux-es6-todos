var sampleData = [{ id: 0, text: "first", completed: false }, { id: 1, text: "second", completed: true }];

function todoApp(state = [], action) {
    if (!state.length) {
        state = sampleData;
    }

    switch (action.type) {
        case 'TOGGLE_TODO':
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