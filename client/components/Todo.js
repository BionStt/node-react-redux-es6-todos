import React, { PropTypes } from 'react'


var divStyle = { marginTop: '1%' };
const Todo = ({ onClick, onDelClick, completed, text }) => (
    <div className="col-xs-12 col-md-12">
        <div className="col-xs-8 col-md-8">
            <li className="list-group-item"
                onClick={onClick}
                style={{textDecoration: completed ? 'line-through' : 'none'}}
            >
                {text}
            </li>
        </div>
        <div className="col-xs-4 col-md-4" style={divStyle}>
            <button onClick={onDelClick} className="btn btn-danger btn-xs">Delete</button>
        </div>


    </div>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    onDelClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo