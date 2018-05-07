/* global it, expect */
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
    const component = shallow(<App />);
    expect(component.exists()).toEqual(true);
});