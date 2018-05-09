import types from '../constants/';

let todoId = 0;

const nextId = () => {
  todoId += 1;
  return todoId;
};

const actions = {
  submitTodo(text) {
    return {
      type: types.SUBMIT_TODO,
      id: nextId(),
      text,
    };
  },
  deleteTodo(id) {
    return {
      type: types.DELETE_TODO,
      id,
    };
  },
  markTodo(id) {
    return {
      type: types.MARK_TODO,
      id,
    };
  },
  editTodo(id, text) {
    return {
      type: types.EDIT_TODO,
      id,
      text,
    };
  },
};

export default actions;
