/* global expect, it, describe */

import types from '../constants/';
import { reducer, initialState } from '.';

describe('Reducer', () => {
  const todoText = 'A todo';
  const todoText2 = 'A different todo';

  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit todo', () => {
    it('Should return the correct state', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText,
        marked: false,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
            marked: false,
          },
        ],
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
  describe('Delete todo', () => {
    it('Should return the correct state', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
            marked: false,
          },
        ],
      };

      const action = {
        type: types.DELETE_TODO,
        id: 1,
      };

      const expectedState = {
        todos: [],
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
  describe('Mark todo', () => {
    it('Should return the correct state', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
            marked: false,
          },
        ],
      };

      const action = {
        type: types.MARK_TODO,
        id: 1,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
            marked: true,
          },
        ],
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
  describe('Edit todo', () => {
    it('Should return the correct state', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText,
            marked: false,
          },
        ],
      };

      const action = {
        type: types.EDIT_TODO,
        id: 1,
        text: todoText2,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText2,
            marked: false,
          },
        ],
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
});
