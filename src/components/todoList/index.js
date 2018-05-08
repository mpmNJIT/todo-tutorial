import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo, markTodo }) => {
  const todoItems = todos.map(todo => (
    <li
      className="todo-obj"
      key={todo.id}
      style={{ textDecoration: todo.marked ? 'line-through' : 'none' }}
    >

      <button
        type="button"
        className="todo-mark"
        onClick={() => markTodo(todo.id)}
      >
            Delete
      </button>

      <button
        type="button"
        className="todo-delete"
        onClick={() => deleteTodo(todo.id)}
      >
                Delete
      </button>

      <span className="todo-text">
        {todo.text}
      </span>
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
};

export default TodoList;
