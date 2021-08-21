import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';
import ComponentWrapper from '../test_helpers/ComponentWrapper';
import Calculator, { CalculatorApp } from '../Calculator';

it('matches snapshot', () => {
  const tree = renderer
    .create(<ComponentWrapper component={Calculator} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Calculator', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = render(<CalculatorApp />);
  });

  it('wraps content in a div with .wrap class', () => {
    const wrap = shallow(<CalculatorApp />);
    expect(wrap.find('.wrap').length).toEqual(1);
  });

  it('wraps display in a div with class display', () => {
    expect(wrapper.find('.display').length).toEqual(1);
  });

  it('wraps button panel in a div with class panel', () => {
    expect(wrapper.find('.panel').length).toEqual(1);
  });

  it('has 19 buttons', () => {
    expect(wrapper.find('button').length).toEqual(19);
  });
});
