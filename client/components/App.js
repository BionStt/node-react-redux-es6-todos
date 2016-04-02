import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

const App = () => (
    <div>
        Todos app
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;