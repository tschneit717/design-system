import { cleanup, render, screen } from '@testing-library/react';
import { InputField } from './InputField';

describe('Input field ->', () => {
  const INPUT_FIELD_TEST_ID = 'input-field-test-id';
  const INPUT_FIELD_NAME = 'input-name';
  const INPUT_FIELD_LABEL = 'Input Name';
  const INPUT_FIELD_TYPE_TEXT = 'text';
  const INPUT_FIELD_TYPE_NUMBER = 'number';

  afterEach(() => {
    cleanup();
  });

  test('renders on page with props passed to it', () => {
    render(
      <InputField
        type={INPUT_FIELD_TYPE_TEXT}
        label={INPUT_FIELD_LABEL}
        name={INPUT_FIELD_NAME}
        testId={INPUT_FIELD_TEST_ID}></InputField>
    );
    const inputField = screen.getByTestId(INPUT_FIELD_TEST_ID);
    expect(inputField).toBeTruthy();
  });
});
