import * as React from 'react';
import { shallow } from 'enzyme';
import NavigationBar from '../NavigationBar';

describe('(Component) NavigationBar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NavigationBar />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
