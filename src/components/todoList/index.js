import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({
  todos, deleteTodo, markTodo, editTodo,
}) => {
  let input;
  const todoItems = todos.map(todo => (
    <li
      className="todo-obj"
      key={todo.id}
      style={{ textDecoration: todo.marked ? 'line-through' : 'none' }}
    >
      <span className="todo-text">
        {todo.text}
      </span>

      <div id="buttons-div" style={{ display: 'inline' }}>

        <button
          type="button"
          className="todo-mark"
          onClick={() => markTodo(todo.id)}
        >
            Mark
        </button>

        <button
          type="button"
          className="todo-delete"
          onClick={() => deleteTodo(todo.id)}
        >
                Delete
        </button>

      </div>

      <div id="edit-div" style={{ display: 'inline' }}>
        <form
          onSubmit={(event) => {
                    event.preventDefault();
                    editTodo(todo.id, input.value);
                    input.value = '';
                }}
        >
          <input
            className="edit-input"
            ref={(element) => {
                    input = element;
                }}
          />
          <button type="Submit" className="edit-submit">

                    Edit
          </button>
        </form>
      </div>
    </li>
  ));

  return (
    <ul>
      {todoItems}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    marked: PropTypes.bool.isRequired,
  })).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoList;
