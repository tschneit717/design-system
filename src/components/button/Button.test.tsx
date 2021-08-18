import { Button } from './Button';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button ->', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const TEST_BUTTON_ID = 'test-button-id';
  const BUTTON_TEXT_STRING = 'test button text';
  const BUTTON_LABEL_STRING = 'test button label';
  const BUTTON_FUNCTION = jest.fn();

  beforeEach(() => {});

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
      <Button testId={TEST_BUTTON_ID} buttonFunction={BUTTON_FUNCTION} />
    );
    wrapper.find('button').simulate('click');
    expect(BUTTON_FUNCTION.mock.calls.length).toEqual(1);
  });

  test('renders the the correct color text if passed a color prop', async () => {
    render(
      <Button
        testId={TEST_BUTTON_ID}
        label={BUTTON_LABEL_STRING}
        textColor='red'
      />
    );
    const buttonElement = await screen.findByTestId(TEST_BUTTON_ID);
    expect(buttonElement).toHaveClass('text-red-400');
    expect(buttonElement).not.toHaveClass('text-red');
  });

  test('renders the the correct white text if passed a color "white" prop', async () => {
    render(
      <Button
        testId={TEST_BUTTON_ID}
        label={BUTTON_LABEL_STRING}
        textColor='white'
      />
    );
    const buttonElement = await screen.findByTestId(TEST_BUTTON_ID);
    expect(buttonElement).toHaveClass('text-white');
    expect(buttonElement).not.toHaveClass('text-white-400');
  });

  test('renders the correct background color when passed a color', async () => {
    render(
      <Button
        testId={TEST_BUTTON_ID}
        label={BUTTON_LABEL_STRING}
        bgColor='red'
      />
    );
    const buttonElement = await screen.findByTestId(TEST_BUTTON_ID);
    expect(buttonElement).toHaveClass('bg-red-400');
    expect(buttonElement).not.toHaveClass('bg-red');
  });

  test('renders the correct background color as white when passed the color white', async () => {
    render(
      <Button
        testId={TEST_BUTTON_ID}
        label={BUTTON_LABEL_STRING}
        bgColor='white'
      />
    );
    const buttonElement = await screen.findByTestId(TEST_BUTTON_ID);
    expect(buttonElement).toHaveClass('bg-white');
    expect(buttonElement).not.toHaveClass('bg-white-400');
  });

  test('renders correctly with no colors passed to it', async () => {
    render(<Button testId={TEST_BUTTON_ID} label={BUTTON_LABEL_STRING} />);
    const buttonElement = await screen.findByTestId(TEST_BUTTON_ID);

    expect(buttonElement).toHaveClass('text-black');
    expect(buttonElement).toHaveClass('bg-white');
  });

  test('expect nothing to happen when the button is clicked with no function passed', async () => {
    render(<Button testId={TEST_BUTTON_ID} label={BUTTON_LABEL_STRING} />);
    const buttonElement = await screen.findByTestId(TEST_BUTTON_ID);

    expect(await userEvent.click(buttonElement)).toBeUndefined();
  });
});
