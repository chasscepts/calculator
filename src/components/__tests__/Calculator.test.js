import React from 'react';
import renderer from 'react-test-renderer';
import ComponentWrapper from '../test_helpers/ComponentWrapper';
import Calculator from '../Calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(<ComponentWrapper component={Calculator} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
