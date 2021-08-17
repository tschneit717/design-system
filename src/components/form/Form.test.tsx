import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { server } from '../../utils/server';
import { Form } from './Form';

describe('Form ->', () => {
  const FORM_TEST_ID = 'form-test-id';
  const FORM_FIELDS = [
    { name: 'Name', type: 'text', label: 'Name' },
    { name: 'Address', type: 'text', label: 'Address' },
  ];
  const FORM_DUMMY_URL = '/test/post';

  beforeAll(() => {
    server.listen();
  });
  beforeEach(() => {
    render(
      <Form
        postURL={FORM_DUMMY_URL}
        inputFields={FORM_FIELDS}
        testId={FORM_TEST_ID}></Form>
    );
  });
  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });

  afterAll(() => {
    server.close();
  });

  test('renders on page with props passed to it', () => {
    const form = screen.getByTestId(FORM_TEST_ID);
    expect(form).toBeTruthy();
  });

  test('Clicking the clear form button removes all values', async () => {
    const form = screen.getByTestId(FORM_TEST_ID);
    const inputElements = form.children[0].children;
    for (let index = 0; index < inputElements.length; index++) {
      const fieldName = 'input-for-' + FORM_FIELDS[index]?.name.toLowerCase();
      const inputElement = await screen.findByTestId(fieldName);
      userEvent.type(inputElement, 'TEST TEXT');
      expect(inputElement).toHaveValue('TEST TEXT');
    }

    const clearButton = screen.getByTestId('clear-form');
    userEvent.click(clearButton);

    for (let index = 0; index < inputElements.length; index++) {
      const fieldName = 'input-for-' + FORM_FIELDS[index]?.name.toLowerCase();
      const inputElement = await screen.findByTestId(fieldName);
      expect(inputElement).toHaveValue('');
    }
  });

  test('Submit form on click of button', async () => {
    const form = screen.getByTestId(FORM_TEST_ID);
    const inputElements = form.children[0].children;
    for (let index = 0; index < inputElements.length; index++) {
      const fieldName = 'input-for-' + FORM_FIELDS[index]?.name.toLowerCase();
      const inputElement = await screen.findByTestId(fieldName);
      userEvent.type(inputElement, 'TEST TEXT');
      expect(inputElement).toHaveValue('TEST TEXT');
    }

    const submitButton = screen.getByTestId('submit-form');
    userEvent.click(submitButton);

    expect(await screen.findByText(/Success/i)).toBeInTheDocument();
  });
});
