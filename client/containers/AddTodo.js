import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div className="col-xs-8 col-md-8">
            <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
                <div className="form-group">
                    <label htmlFor="txtNewTodo" className="control-label">Todo</label>
                    <input id="txtNewTodo" className="form-control" ref={node => {
          input = node
        }}/>
                    <button className="btn btn-primary" type="submit">
                        Add Todo
                    </button>
                </div>
            </form>
        </div>
    )
};

export default connect()(AddTodo);
