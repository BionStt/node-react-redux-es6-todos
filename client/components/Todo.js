import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
    <li
        style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    >
        {text}
    </li>
);


export default Todo