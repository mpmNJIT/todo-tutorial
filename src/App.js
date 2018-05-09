import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/';
import TodoList from './components/todoList';
import actions from './actions/';

export const App = ({
  submitTodo, todos, deleteTodo, markTodo, editTodo,
}) => (
  <div>
    <h1>Things to do</h1>
    <AddTodo submitTodo={submitTodo} />
    <TodoList todos={todos} deleteTodo={deleteTodo} markTodo={markTodo} editTodo={editTodo} />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    marked: PropTypes.bool.isRequired,
  })).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },

  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },

  markTodo: (id) => {
    dispatch(actions.markTodo(id));
  },

  editTodo: (id, text) => {
    if (text) {
      dispatch(actions.editTodo(id, text));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
