import { cleanup, render, screen } from '@testing-library/react';
import { Form } from './Form';

describe('Form ->', () => {
  const FORM_TEST_ID = 'form-test-id';
  const FORM_FIELDS = [
    { name: 'Name', type: 'text', label: 'Name' },
    { name: 'Address', type: 'text', label: 'Address' },
  ];

  afterEach(() => {
    cleanup();
  });

  test('renders on page with props passed to it', () => {
    render(<Form inputFields={FORM_FIELDS} testId={FORM_TEST_ID}></Form>);
    const form = screen.getByTestId(FORM_TEST_ID);
    expect(form).toBeTruthy();
  });
});
