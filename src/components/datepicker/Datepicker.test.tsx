import { cleanup, render, screen } from '@testing-library/react';
import userEvent, { TargetElement } from '@testing-library/user-event';
import { Datepicker, formatValue } from './Datepicker';

const DATEPICKER_TEST_ID = 'test-id';
const DATEPICKER_TEST_DATE = `${new Date().getFullYear()}/${formatValue(
  new Date().getMonth() + 1
)}/${formatValue(new Date().getDate())}`;
const DATEPICKER_TEST_DATE_BUTTON_ID = 'test-button-id';
const DATEPICKER_SELECT_BUTTON_TEST_ID = 'test-select-button-id';

let datePicker: HTMLElement;

describe('Datepicker ->', () => {
  beforeEach(async () => {
    render(
      <Datepicker
        includeNegativeYears={true}
        includePositiveYears={true}
        testid={DATEPICKER_TEST_ID}
        startWeekOnMonday={false}
        testButtonId={DATEPICKER_TEST_DATE_BUTTON_ID}
        selectButtonTestId={DATEPICKER_SELECT_BUTTON_TEST_ID}
      />
    );
    datePicker = await screen.findByTestId(DATEPICKER_TEST_ID);
  });

  afterEach(() => {
    cleanup();
  });

  test('renders the datepicker on the page', async () => {
    expect(datePicker).toBeTruthy();
  });

  test('selecting the field expands the datepicker form', async () => {
    userEvent.click(datePicker.children[0].children[0]);
    const dateSelector = await screen.findByTitle('Datepicker Selector');
    expect(dateSelector).toBeTruthy();
  });

  test('selecting the today value in the date selector updates the input field value', async () => {
    userEvent.click(datePicker.children[0].children[0]);
    const selectedDate = await screen.findByTestId(
      DATEPICKER_TEST_DATE_BUTTON_ID
    );
    await userEvent.click(selectedDate);
    const selectField = screen.getByTestId(DATEPICKER_SELECT_BUTTON_TEST_ID);
    expect(selectField.textContent).toBe(DATEPICKER_TEST_DATE);
  });

  test('selecting a date in the date selector updates the input field value', async () => {
    userEvent.click(datePicker.children[0].children[0]);
    const selectedDate = document.querySelector(
      '[data-date="2021/08/05"]'
    ) as TargetElement;
    await userEvent.click(selectedDate);
    const selectField = screen.getByTestId(DATEPICKER_SELECT_BUTTON_TEST_ID);
    expect(selectField.textContent).toBe('2021/08/05');
  });

  test('clearing the date will reset the date to an empty string', async () => {
    userEvent.click(datePicker.children[0].children[0]);
    const selectedDate = await screen.findByTestId(
      DATEPICKER_TEST_DATE_BUTTON_ID
    );
    await userEvent.click(selectedDate);
    const selectField = screen.getByTestId(DATEPICKER_SELECT_BUTTON_TEST_ID);
    expect(selectField.textContent).toBe(DATEPICKER_TEST_DATE);

    const clearButton = screen.getByTitle('Clear Date');
    await userEvent.click(clearButton);
    expect(selectField.textContent).toBe('yyyy/mm/dd');
  });

  test('clicking previous month will change the month values to the previous month', async () => {
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

  test('clicking the next month through the year will update the year to the next', async () => {
    userEvent.click(datePicker.children[0].children[0]);

    const selectedDate = await screen.findByTestId(
      DATEPICKER_TEST_DATE_BUTTON_ID
    );
    await userEvent.click(selectedDate);

    userEvent.click(datePicker.children[0].children[0]);

    const nextMonthButton = await screen.findByTitle('Next Month');
    const yearSelector = await screen.findByTitle('Year Select');
    while (yearSelector.children[0].textContent !== '2022') {
      userEvent.click(nextMonthButton);
    }
    expect(yearSelector.children[0]).toHaveTextContent('2022');
  });

  test('clicking the previous month through the year will update the year to the previous', async () => {
    userEvent.click(datePicker.children[0].children[0]);

    const selectedDate = await screen.findByTestId(
      DATEPICKER_TEST_DATE_BUTTON_ID
    );
    await userEvent.click(selectedDate);

    userEvent.click(datePicker.children[0].children[0]);

    const previousMonthButton = await screen.findByTitle('Previous Month');
    const yearSelector = await screen.findByTitle('Year Select');
    while (yearSelector.children[0].textContent !== '2020') {
      userEvent.click(previousMonthButton);
    }
    expect(yearSelector.children[0]).toHaveTextContent('2020');
  });

  test('Changing the year will update the calendar', async () => {
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

  test('Hide year selector on mouse leave after clicking on it', async () => {
    userEvent.click(datePicker.children[0].children[0]);

    const selectedDate = await screen.findByTestId(
      DATEPICKER_TEST_DATE_BUTTON_ID
    );
    userEvent.click(selectedDate);

    userEvent.click(datePicker.children[0].children[0]);

    const yearSelector = await screen.findByTitle('Year Select');

    userEvent.click(yearSelector);
    const buttonList = yearSelector.querySelector('div');
    if (buttonList) {
      userEvent.hover(buttonList);
      userEvent.unhover(buttonList);
    }
    expect(buttonList).toHaveClass('hidden');
  });
});

describe('Datepicker with specific year ranges ->', () => {
  afterEach(() => {
    cleanup();
  });
  test('only negative year ranges are shown', async () => {
    render(
      <Datepicker
        includeNegativeYears={true}
        includePositiveYears={false}
        testid={DATEPICKER_TEST_ID}
        startWeekOnMonday={false}
        testButtonId={DATEPICKER_TEST_DATE_BUTTON_ID}
        selectButtonTestId={DATEPICKER_SELECT_BUTTON_TEST_ID}></Datepicker>
    );
    const datePicker = await screen.findByTestId(DATEPICKER_TEST_ID);
    userEvent.click(datePicker.children[0].children[0]);

    const selectedDate = await screen.findByTestId(
      DATEPICKER_TEST_DATE_BUTTON_ID
    );
    userEvent.click(selectedDate);
    userEvent.click(datePicker.children[0].children[0]);

    const yearSelector = await screen.findByTitle('Year Select');
    userEvent.click(yearSelector);

    const buttonList = yearSelector.querySelectorAll('button');
    expect(buttonList[0].id).toBe('year-selector-2021');
    expect(buttonList[buttonList.length - 1].id).toBe('year-selector-2001');
  });

  test('only positive year ranges are shown', async () => {
    render(
      <Datepicker
        includeNegativeYears={false}
        includePositiveYears={true}
        testid={DATEPICKER_TEST_ID}
        startWeekOnMonday={false}
        testButtonId={DATEPICKER_TEST_DATE_BUTTON_ID}
        selectButtonTestId={DATEPICKER_SELECT_BUTTON_TEST_ID}></Datepicker>
    );
    const datePicker = await screen.findByTestId(DATEPICKER_TEST_ID);
    userEvent.click(datePicker.children[0].children[0]);

    const selectedDate = await screen.findByTestId(
      DATEPICKER_TEST_DATE_BUTTON_ID
    );
    userEvent.click(selectedDate);
    userEvent.click(datePicker.children[0].children[0]);

    const yearSelector = await screen.findByTitle('Year Select');
    userEvent.click(yearSelector);

    const buttonList = yearSelector.querySelectorAll('button');
    expect(buttonList[0].id).toBe('year-selector-2041');
    expect(buttonList[buttonList.length - 1].id).toBe('year-selector-2021');
  });

  test('start week on Monday if passed as a prop', async () => {
    render(
      <Datepicker
        includeNegativeYears={false}
        includePositiveYears={true}
        testid={DATEPICKER_TEST_ID}
        startWeekOnMonday={true}
        testButtonId={DATEPICKER_TEST_DATE_BUTTON_ID}
        selectButtonTestId={DATEPICKER_SELECT_BUTTON_TEST_ID}></Datepicker>
    );

    const datePicker = await screen.findByTestId(DATEPICKER_TEST_ID);
    userEvent.click(datePicker.children[0].children[0]);

    const daysOfTheWeek = document.querySelector(
      '.datepicker__days-of-the-week'
    );
    expect(daysOfTheWeek?.children[0]).toHaveTextContent('MON');
  });
});
