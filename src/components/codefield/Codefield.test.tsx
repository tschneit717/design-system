import { Codefield } from './Codefield';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render } from '@testing-library/react';

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
});
