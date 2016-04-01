import React from 'react'

import TodoList from './TodoList';

const App = () => (
    <div>
        Todos app
        <TodoList todos={[{text:"first", completed: false}, {text:"second", completed: true}]} />

    </div>
);

export default App;