import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function NewTodo(props) {

  const [todo, setTodo] = useState(props.nextTodo);

  const handleSubmit = evt => {
    if (todo.todoText === "") {
      return;
    }
    props.addTodo(todo);
    evt.preventDefault();
  };

  useEffect(() => setTodo({ ...props.nextTodo }), [props.nextTodo]);

  const onChange = evt => {
    const val = evt.target.value;
    todo.todoText = val;
    setTodo({ ...todo });
  };
  const title = todo.id==="" ?"Create new Todo" : "Edit Todo"
  return (
    <div>
      <h4>{title}</h4>
      <form onSubmit={handleSubmit}>
        <input value={todo.todoText} onChange={onChange} />
        <div style={{ marginTop: 5 }}>
          <button className="btn btn-info">Save</button>
        </div>
      </form>
      {todo.id !== "" && <p>Editing todo with</p>}
    </div>
  );
}
export default NewTodo;

NewTodo.propTypes = {
  nextTodo: PropTypes.object,
  addTodo: PropTypes.func
}
