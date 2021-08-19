import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputField } from './InputField';

describe('Input field ->', () => {
  const INPUT_FIELD_TEST_ID = 'input-field-test-id';
  const INPUT_FIELD_NAME = 'input-name';
  const INPUT_FIELD_LABEL = 'Input Name';
  const INPUT_FIELD_TYPE_TEXT = 'text';
  const INPUT_FIELD_FUNC = jest.fn();
  const INPUT_FIELD_TYPE_NUMBER = 'number';
  const INPUT_FIELD_TYPE_FILE = 'file';

  afterEach(() => {
    cleanup();
  });

  test('renders on page with props passed to it', () => {
    render(
      <InputField
        type={INPUT_FIELD_TYPE_TEXT}
        label={INPUT_FIELD_LABEL}
        name={INPUT_FIELD_NAME}
        handleChange={INPUT_FIELD_FUNC}
        isRequired={true}
        testId={INPUT_FIELD_TEST_ID}></InputField>
    );
    const inputField = screen.getByTestId(INPUT_FIELD_TEST_ID);
    expect(inputField).toBeTruthy();
  });

  test('Expect input field value to change if typed in', async () => {
    render(
      <InputField
        type={INPUT_FIELD_TYPE_TEXT}
        label={INPUT_FIELD_LABEL}
        name={INPUT_FIELD_NAME}
        isRequired={true}
        testId={INPUT_FIELD_TEST_ID}></InputField>
    );
    const inputField = screen.getByTestId(`input-for-${INPUT_FIELD_NAME}`);

    await userEvent.type(inputField, 'TEST TEXT');
    expect(inputField).toHaveValue('TEST TEXT');
  });
});
