import * as React from 'react';
import { Route } from 'react-router';
import createRouterContext from 'react-router-test-context';

import { shallow } from 'enzyme';

import { UsersWithoutHOC } from '../index';

describe('(Scene) Users', () => {
  it('renders without crashing', () => {
    const context = createRouterContext();
    const wrapper = shallow(
      <Route path="/" render={props => <UsersWithoutHOC {...props} />} />,
      { context }
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
