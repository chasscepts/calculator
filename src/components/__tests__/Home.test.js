import React from 'react';
import renderer from 'react-test-renderer';
import ComponentWrapper from '../test_helpers/ComponentWrapper';
import Home from '../Home';

it('renders correctly', () => {
  const tree = renderer
    .create(<ComponentWrapper component={Home} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
