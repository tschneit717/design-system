import { useState } from 'react';
import { PropsWithChildren, FunctionComponent } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export interface DatepickerProps extends PropsWithChildren<any> {
  text?: string;
  testid?: string;
  testButtonId?: string;
}

export const formatValue = (value: number) => {
  if (value < 10) {
    return `0${value}`;
  }
  return value.toString();
};

export const Datepicker: FunctionComponent<DatepickerProps> = (
  props: DatepickerProps
) => {
  const tempDate = `${new Date().getFullYear()}/${formatValue(
    new Date().getMonth() + 1
  )}/${formatValue(new Date().getDate())}`;
  const [selectedDate, setSelectedDate] = useState(tempDate);
  const [datePickerOpen, toggleDatePickerOpen] = useState(false);
  const [daysOfTheMonth, setDaysOfTheMonth] = useState<Date[]>();
  const [activeMonth, setActiveMonth] = useState(
    formatValue(new Date(tempDate).getMonth() + 1)
  );
  const [activeYear, setActiveYear] = useState(
    new Date(tempDate).getFullYear()
  );

  const handleDateRange = (value: number, increasing: boolean) => {
    if (increasing) {
      if (value === 12) {
        setActiveMonth(formatValue(1));
        setActiveYear(activeYear + 1);
        generateMonth(new Date(`${activeYear + 1}/01/1`));
      } else {
        setActiveMonth(formatValue(value + 1));
        generateMonth(new Date(`${activeYear}/${value + 1}/1`));
      }
    }
    if (!increasing) {
      if (value === 1) {
        setActiveMonth(formatValue(12));
        setActiveYear(activeYear - 1);
        generateMonth(new Date(`${activeYear - 1}/12/1`));
      } else {
        setActiveMonth(formatValue(value - 1));
        generateMonth(new Date(`${activeYear}/${value - 1}/1`));
      }
    }
  };

  const updateSelectedDate = (e: any) => {
    const dataDate = e.currentTarget.getAttribute('data-date');
    const dateConversion = new Date(dataDate);
    setActiveMonth(formatValue(dateConversion.getMonth() + 1));
    generateMonth(dateConversion);
    setSelectedDate(dataDate);
    toggleDatePickerOpen(false);
  };

  const generateMonth = (activeDate: Date) => {
    let date = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1);
    let days = [];
    while (date.getMonth() === activeDate.getMonth()) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    setDaysOfTheMonth(days);
  };

  const getMonthName = (activeMonth: string) => {
    const monthString = new Date(
      `${activeYear}/${activeMonth}/01`
    ).toLocaleString('default', { month: 'long' });
    return monthString;
  };

  if (!daysOfTheMonth) {
    generateMonth(new Date(tempDate));
  }

  return (
    <div
      data-component-type='Datepicker'
      data-testid={props.testid}
      className='datepicker'>
      <div onClick={() => toggleDatePickerOpen(!datePickerOpen)}>
        <input
          id='selected-date'
          onClick={(e) => e.preventDefault()}
          onChange={() => setSelectedDate(selectedDate)}
          value={selectedDate}
          type='date'
        />
      </div>
      {datePickerOpen && (
        <div
          title='Datepicker Selector'
          className='datepicker__selector text-xs rounded-2xl border'>
          <div className='w-full text-xl text-bold my-4 text-center'>
            {getMonthName(activeMonth)}
          </div>
          <div className='grid grid-cols-7 gap-1 text-center font-bold mb-2'>
            <span className='text-red-600'>SUN</span>
            <span>MON</span>
            <span>TUES</span>
            <span>WES</span>
            <span>THURS</span>
            <span>FRI</span>
            <span className='text-red-600'>SAT</span>
          </div>
          <div className='datepicker__grid grid grid-cols-7 gap-1'>
            {daysOfTheMonth?.map((date) => (
              <button
                className={`col-start-${date.getDay() + 1} text-center ${
                  date.getDay() + 1 === 1 || date.getDay() + 1 === 7
                    ? 'text-red-600'
                    : ''
                }`}
                key={date.toISOString()}
                data-date={`${date.getFullYear()}-${formatValue(
                  date.getMonth() + 1
                )}-${formatValue(date.getDate())}`}
                onClick={(e) => updateSelectedDate(e)}>
                {date.getDate()}
              </button>
            ))}
          </div>
          <div className='w-full flex items-center justify-center text-xl mt-4'>
            <button
              className={'mr-3'}
              title='Previous Month'
              onClick={() => handleDateRange(+activeMonth, false)}>
              {<BiChevronLeft></BiChevronLeft>}
            </button>
            <button
              onClick={(e) => updateSelectedDate(e)}
              data-testid={props.testButtonId}
              data-date={tempDate}>
              Today
            </button>
            <button
              className={'ml-3'}
              title='Next Month'
              onClick={() => handleDateRange(+activeMonth, true)}>
              {<BiChevronRight></BiChevronRight>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
