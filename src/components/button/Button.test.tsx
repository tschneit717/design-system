import { Button } from './Button';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render, screen } from '@testing-library/react';

describe('Button ->', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const TEST_BUTTON_ID = 'test-button-id';
  const BUTTON_TEXT_STRING = 'test button text';
  const BUTTON_LABEL_STRING = 'test button label';
  const BUTTON_FUNCTION = jest.fn();

  beforeEach(() => {
    render(<Button />);
  });

  afterEach(() => {
    cleanup();
  });

  test('renders when no props are provided', () => {
    render(<Button />);
  });

  test('renders when title prop is provided', async () => {
    render(<Button testId={TEST_BUTTON_ID} text={BUTTON_TEXT_STRING} />);

    expect(screen.getByTestId(TEST_BUTTON_ID)).toHaveTextContent(
      BUTTON_TEXT_STRING
    );
  });

  test('renders when label prop is provided', async () => {
    render(<Button testId={TEST_BUTTON_ID} label={BUTTON_LABEL_STRING} />);

    expect(screen.getByTestId(TEST_BUTTON_ID)).toHaveAttribute(
      'aria-label',
      BUTTON_LABEL_STRING
    );
  });

  test('renders when a function prop is provided and clicked', async () => {
    const wrapper = shallow(
      <Button testId={TEST_BUTTON_ID} function={BUTTON_FUNCTION} />
    );
    wrapper.find('button').simulate('click');
    expect(BUTTON_FUNCTION.mock.calls.length).toEqual(1);
  });
});
