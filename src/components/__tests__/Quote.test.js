import React from 'react';
import renderer from 'react-test-renderer';
import ComponentWrapper from '../test_helpers/ComponentWrapper';
import Quote from '../Quote';

it('renders correctly', () => {
  const tree = renderer
    .create(<ComponentWrapper component={Quote} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
