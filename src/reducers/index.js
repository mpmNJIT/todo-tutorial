import types from '../constants/';

export const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            marked: false,
          },
        ],
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => (
            todo.id !== action.id
          )),
        ],
      };
    case types.MARK_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo =>
            ((todo.id === action.id) ? { ...todo, marked: !todo.marked } : todo)),
        ],
      };
    case types.EDIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo =>
            ((todo.id === action.id) ? { ...todo, text: action.text } : todo)),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
