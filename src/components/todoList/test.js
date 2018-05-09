/* global describe, it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import TodoList from '.';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('TodoList component', () => {
  const deleteMock = jest.fn();
  const markMock = jest.fn();

  const props = {
    todos: [
      {
        id: 1,
        text: 'A todo',
        marked: false,
      },
    ],
    deleteTodo: deleteMock,
    markTodo: markMock,
  };

  const component = shallow(<TodoList {...props} />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should display a todo when passed in as a prop', () => {
    expect(component.find('.todo-text').text()).toEqual(props.todos[0].text);
  });

  it('Should call the deleteTodo function when Delete button is clicked', () => {
    expect(deleteMock.mock.calls.length).toEqual(0);
    component.find('.todo-delete').simulate('click');
    expect(deleteMock.mock.calls.length).toEqual(1);
  });

  it('Should call the markTodo function when Mark button is clicked', () => {
    expect(markMock.mock.calls.length).toEqual(0);
    component.find('.todo-mark').simulate('click');
    expect(deleteMock.mock.calls.length).toEqual(1);
  });
});
