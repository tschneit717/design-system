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
  return value;
};

export const Datepicker: FunctionComponent<DatepickerProps> = (
  props: DatepickerProps
) => {
  const tempDate = `${new Date().getFullYear()}-${formatValue(
    new Date().getMonth() + 1
  )}-${formatValue(new Date().getDate())}`;
  const [selectedDate, setSelectedDate] = useState(tempDate);
  const [datePickerOpen, toggleDatePickerOpen] = useState(false);
  const [daysOfTheMonth, setDaysOfTheMonth] = useState<Date[]>();
  const [activeMonth, setActiveMonth] = useState(
    formatValue(new Date().getMonth() + 1)
  );
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());

  const updateSelectedDate = (e: any) => {
    const dataDate = e.currentTarget.getAttribute('data-date');
    const dateConversion = new Date(dataDate);
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

  const handleDateRange = (dateType: string, value: number) => {
    if (dateType === 'month') {
      if (value === 0) {
        setActiveMonth(12);
        setActiveYear(activeYear - 1);
      } else if (value === 13) {
        setActiveMonth(0o1);
        setActiveYear(activeYear + 1);
      } else {
        setActiveMonth(formatValue(value));
      }
    } else {
      setActiveYear(value);
    }
    generateMonth(new Date(`${activeYear}-${activeMonth}-01`));
  };

  if (!daysOfTheMonth) {
    generateMonth(new Date(tempDate));
  }

  return (
    <div data-testid={props.testid} className='datepicker'>
      <div onClick={() => toggleDatePickerOpen(!datePickerOpen)}>
        <input
          id='selected-date'
          onChange={() => setSelectedDate(selectedDate)}
          value={selectedDate}
          type='date'
        />
      </div>
      {datePickerOpen && (
        <div title='Datepicker Selector' className='datepicker__selector'>
          {new Date(activeMonth).toLocaleString()}
          <div className='datepicker__grid'>
            {daysOfTheMonth?.map((date) => (
              <button
                key={date.toISOString()}
                data-date={`${date.getFullYear()}-${formatValue(
                  date.getMonth() + 1
                )}-${formatValue(date.getDate())}`}
                onClick={(e) => updateSelectedDate(e)}>
                {date.getDate()}
              </button>
            ))}
          </div>
          <button
            title='Previous Month'
            onClick={() => handleDateRange('month', Number(activeMonth) - 1)}>
            {<BiChevronLeft></BiChevronLeft>}
          </button>
          <button
            onClick={(e) => updateSelectedDate(e)}
            data-testid={props.testButtonId}
            data-date={tempDate}>
            Today
          </button>
          <button
            title='Next Month'
            onClick={() => handleDateRange('month', Number(activeMonth) + 1)}>
            {<BiChevronRight></BiChevronRight>}
          </button>
        </div>
      )}
    </div>
  );
};
