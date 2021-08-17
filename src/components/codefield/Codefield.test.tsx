import { Codefield } from './Codefield';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Codefield ->', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const TEST_CODEFIELD_ID = 'test-codefield-id';
  const TEST_CODEFIELD_LENGTH = 4;
  const TEST_CODEFIELD_VALUE = 'invite';

  beforeEach(() => {
    render(
      <Codefield
        testid={TEST_CODEFIELD_ID}
        count={TEST_CODEFIELD_LENGTH}
        value={TEST_CODEFIELD_VALUE}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('renders when props are provided', () => {
    const formWrapper = document.querySelector('.codefield');
    expect(formWrapper).toBeTruthy();
  });

  test('renders out the number of items passed to it', () => {
    const formWrapper = document.querySelector('.codefield');
    expect(formWrapper?.children.length).toEqual(TEST_CODEFIELD_LENGTH);
  });

  test('expect that each field can only accept one item', () => {
    const formWrapper = document.querySelectorAll('.codefield input');
    formWrapper.forEach((input) => {
      expect(input.getAttribute('maxLength')).toBe('1');
    });
  });

  test('expect that when a field is entered, the next field will be focused', async () => {
    const formWrapper = document.querySelectorAll('.codefield input');
    await userEvent.type(formWrapper[0], 't');

    expect(formWrapper[1]).toHaveFocus();
  });

  test('expect that when a field is cleared, the previous field will be focused', async () => {
    const formWrapper = document.querySelectorAll('.codefield input');
    await userEvent.type(formWrapper[0], 't');
    await userEvent.type(formWrapper[1], 'e');
    await userEvent.tab({ shift: true });
    await userEvent.type(formWrapper[1], '{backspace}');

    expect(formWrapper[0]).toHaveFocus();
  });

  test('expect that when the field is cleared, there will be no change in focus', async () => {
    const formWrapper = document.querySelectorAll('.codefield input');
    await userEvent.type(formWrapper[0], 't');
    await userEvent.tab({ shift: true });
    await userEvent.type(formWrapper[0], '{backspace}');

    expect(formWrapper[0]).toHaveFocus();
  });
});
