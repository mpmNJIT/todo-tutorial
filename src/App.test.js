/* global it, expect */
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import { App } from './App';
import { initialState } from './reducers/';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(<App
    state={initialState}
    submitTodo={mockFunction}
    deleteTodo={mockFunction}
    todos={[]}
  />);

  expect(component.exists()).toEqual(true);
});
