import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Datepicker, formatValue } from './Datepicker';

describe('Datepicker ->', () => {
  const DATEPICKER_TEST_ID = 'test-id';
  const DATEPICKER_TEST_DATE = `${new Date().getFullYear()}/${formatValue(
    new Date().getMonth() + 1
  )}/${formatValue(new Date().getDate())}`;
  const DATEPICKER_TEST_DATE_BUTTON_ID = 'test-button-id';
  const DATEPICKER_SELECT_BUTTON_TEST_ID = 'test-select-button-id';
  beforeEach(() =>
    render(
      <Datepicker
        testid={DATEPICKER_TEST_ID}
        startWeekOnMonday={true}
        testButtonId={DATEPICKER_TEST_DATE_BUTTON_ID}
        selectButtonTestId={DATEPICKER_SELECT_BUTTON_TEST_ID}
      />
    )
  );
  afterEach(() => {
    cleanup();
  });
  test('renders the datepicker on the page', async () => {
    const datePicker = await screen.findByTestId(DATEPICKER_TEST_ID);

    expect(datePicker).toBeTruthy();
  });

  test('selecting the field expands the datepicker form', async () => {
    const datePicker = await screen.findByTestId(DATEPICKER_TEST_ID);
    userEvent.click(datePicker.children[0].children[0]);
    const dateSelector = await screen.findByTitle('Datepicker Selector');
    expect(dateSelector).toBeTruthy();
  });

  test('selecting a date in the date selector updates the input field value', async () => {
    const datePicker = await screen.findByTestId(DATEPICKER_TEST_ID);
    userEvent.click(datePicker.children[0].children[0]);
    const selectedDate = await screen.findByTestId(
      DATEPICKER_TEST_DATE_BUTTON_ID
    );
    await userEvent.click(selectedDate);
    const selectField = await screen.getByTestId(
      DATEPICKER_SELECT_BUTTON_TEST_ID
    );
    expect(selectField.textContent).toBe(DATEPICKER_TEST_DATE);
  });

  test('clicking previous month will change the month values to the previous month', async () => {
    const datePicker = await screen.findByTestId(DATEPICKER_TEST_ID);
    userEvent.click(datePicker.children[0].children[0]);

    const previousMonthButton = await screen.findByTitle('Previous Month');
    userEvent.click(previousMonthButton);

    const daysOfTheMonth = document.querySelectorAll(
      '.datepicker__grid button[data-date]'
    );
  });
});
