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
        includeNegativeYears={true}
        includePositiveYears={true}
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
    const selectField = screen.getByTestId(DATEPICKER_SELECT_BUTTON_TEST_ID);
    expect(selectField.textContent).toBe(DATEPICKER_TEST_DATE);
  });

  test('clicking previous month will change the month values to the previous month', async () => {
    const datePicker = await screen.findByTestId(DATEPICKER_TEST_ID);
    userEvent.click(datePicker.children[0].children[0]);

    const selectedDate = await screen.findByTestId(
      DATEPICKER_TEST_DATE_BUTTON_ID
    );
    await userEvent.click(selectedDate);

    userEvent.click(datePicker.children[0].children[0]);

    const previousMonthButton = await screen.findByTitle('Previous Month');
    userEvent.click(previousMonthButton);
    const activeMonth = await screen.findByTitle('Active Month');
    expect(activeMonth.textContent).toBe('July');

    const daySelectors = document.querySelectorAll(
      '.datepicker__grid button[data-date]'
    )[0];
    const month = daySelectors.getAttribute('data-date')?.split('/')[1];
    expect(month).toBe('07');
  });

  test('Changing the year will update the calendar', async () => {
    const datePicker = await screen.findByTestId(DATEPICKER_TEST_ID);
    userEvent.click(datePicker.children[0].children[0]);

    const selectedDate = await screen.findByTestId(
      DATEPICKER_TEST_DATE_BUTTON_ID
    );
    userEvent.click(selectedDate);

    userEvent.click(datePicker.children[0].children[0]);

    const yearSelector = await screen.findByTitle('Year Select');

    expect(yearSelector.children[0]).toHaveTextContent('2021');
    userEvent.click(yearSelector);

    const yearButton = yearSelector.querySelector(
      '#year-selector-2041'
    ) as Element;
    userEvent.click(yearButton);

    expect(yearSelector.children[0]).toHaveTextContent('2041');
    const daySelectors = document.querySelectorAll(
      '.datepicker__grid button[data-date]'
    )[0];
    const year = daySelectors.getAttribute('data-date')?.split('/')[0];
    expect(year).toBe('2041');
  });

  test('Hide the next month arrow if at the last month of the latest year', async () => {
    const datePicker = await screen.findByTestId(DATEPICKER_TEST_ID);
    userEvent.click(datePicker.children[0].children[0]);

    const selectedDate = await screen.findByTestId(
      DATEPICKER_TEST_DATE_BUTTON_ID
    );
    userEvent.click(selectedDate);

    userEvent.click(datePicker.children[0].children[0]);

    const yearSelector = await screen.findByTitle('Year Select');

    userEvent.click(yearSelector);

    const yearButton = yearSelector.querySelector(
      '#year-selector-2041'
    ) as Element;
    userEvent.click(yearButton);

    let nextMonthButton = await screen.findByTitle('Next Month');
    const activeMonth = await screen.findByTitle('Active Month');
    expect(activeMonth.textContent).toBe('August');
    userEvent.click(nextMonthButton);
    while (activeMonth.textContent !== 'December') {
      userEvent.click(nextMonthButton);
    }

    expect(yearSelector.children[0]).toHaveTextContent('2041');
    expect(activeMonth.textContent).toBe('December');
    const nextButton = document.querySelector("[title='Next Month']");
    expect(nextButton).toBeNull();
  });

  test('Hide the previous month arrow if at the first month of the earliest year', async () => {
    const datePicker = await screen.findByTestId(DATEPICKER_TEST_ID);
    userEvent.click(datePicker.children[0].children[0]);

    const selectedDate = await screen.findByTestId(
      DATEPICKER_TEST_DATE_BUTTON_ID
    );
    userEvent.click(selectedDate);

    userEvent.click(datePicker.children[0].children[0]);

    const yearSelector = await screen.findByTitle('Year Select');

    userEvent.click(yearSelector);

    const yearButton = yearSelector.querySelector(
      '#year-selector-2001'
    ) as Element;
    userEvent.click(yearButton);

    const previousMonthButton = await screen.findByTitle('Previous Month');
    const activeMonth = await screen.findByTitle('Active Month');
    expect(activeMonth.textContent).toBe('August');
    userEvent.click(previousMonthButton);
    while (activeMonth.textContent !== 'January') {
      userEvent.click(previousMonthButton);
    }

    expect(yearSelector.children[0]).toHaveTextContent('2001');
    expect(activeMonth.textContent).toBe('January');
    const prevButton = document.querySelector("[title='Prev Month']");
    expect(prevButton).toBeNull();
  });
});
