import { useState } from 'react';
import { PropsWithChildren, FunctionComponent } from 'react';
import {
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
  BiChevronUp,
  BiX,
} from 'react-icons/bi';

export interface DatepickerProps extends PropsWithChildren<any> {
  text?: string;
  startWeekOnMonday: boolean;
  testid?: string;
  testButtonId?: string;
  selectButtonTestId?: string;
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
  const tempDate = `${new Date().getFullYear()}-${formatValue(
    new Date().getMonth() + 1
  )}-${formatValue(new Date().getDate())}`;
  const [selectedDate, setSelectedDate] = useState('yyyy/mm/dd');
  const [datePickerOpen, toggleDatePickerOpen] = useState(false);
  const [daysOfTheMonth, setDaysOfTheMonth] = useState<Date[]>();
  const [activeMonth, setActiveMonth] = useState(
    formatValue(new Date(tempDate).getMonth() + 1)
  );
  const [activeYear, setActiveYear] = useState(
    new Date(tempDate).getFullYear()
  );
  const [yearSelect, toggleYearSelect] = useState(false);
  const [selectYears, setSelectYear] = useState<number[]>();
  const yearRange = 20;

  const yearSelector = () => {
    const currentYear = new Date(tempDate).getFullYear();
    const years = [];
    let i = 0;

    while (years.length <= yearRange * 2) {
      years.push(currentYear - yearRange + i);
      i++;
    }
    years.sort((a, b) => b - a);
    setSelectYear(years);
  };

  const updateYear = (event: HTMLElement) => {
    const date = new Date(`${event.innerText}/${activeMonth}/01`);
    toggleYearSelect(false);
    setActiveYear(+event.innerText);
    generateMonth(date);
  };

  const handleDateRange = (value: number, increasing: boolean) => {
    let newMonth;
    let newYear;
    if (increasing) {
      if (value === 12) {
        newMonth = 1;
        newYear = activeYear + 1;
      } else {
        newYear = activeYear;
        newMonth = +activeMonth + 1;
      }
    } else {
      if (value === 1) {
        newMonth = 12;
        newYear = activeYear - 1;
      } else {
        newYear = activeYear;
        newMonth = +activeMonth - 1;
      }
    }

    setActiveYear(newYear);
    setActiveMonth(formatValue(newMonth));
    generateMonth(new Date(`${newYear}/${newMonth}/1`));
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

  const prevArrowVisibility = () => {
    return (
      activeYear > new Date(tempDate).getFullYear() - yearRange ||
      (activeYear === new Date(tempDate).getFullYear() - yearRange &&
        +activeMonth > 1)
    );
  };

  const nextArrowVisibility = () => {
    return (
      activeYear < new Date(tempDate).getFullYear() + yearRange ||
      (activeYear === new Date(tempDate).getFullYear() + yearRange &&
        +activeMonth < 12)
    );
  };

  const shiftWeekDays = (dayOfTheWeek: number) => {
    if (props.startWeekOnMonday) {
      let newColumn = dayOfTheWeek - 1;
      if (newColumn === 0) {
        return 7;
      }
      return newColumn;
    }
    return dayOfTheWeek;
  };
  const renderWeekDays = () => {
    const daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let daysArray = daysOfTheWeek;
    if (props.startWeekOnMonday) {
      const [first, ...rest] = daysArray;
      daysArray = [...rest, first];
    }
    return daysArray.map((item) => (
      <span
        key={item}
        className={
          item.includes('SUN') || item.includes('SAT') ? 'text-red-600' : ''
        }>
        {item}
      </span>
    ));
  };

  if (!daysOfTheMonth) {
    generateMonth(new Date(tempDate));
    yearSelector();
    renderWeekDays();
  }

  const resetDate = () => {
    setSelectedDate('yyyy/mm/dd');
    toggleDatePickerOpen(false);
  };

  return (
    <div
      data-component-type='Datepicker'
      data-testid={props.testid}
      className='datepicker relative'>
      <div className='inline-flex items-center'>
        <span
          onClick={() => toggleDatePickerOpen(!datePickerOpen)}
          id='selected-date'
          data-testid={props.selectButtonTestId}>
          {selectedDate.replace(/-/g, '/')}
        </span>
        <button
          className={`ml-4 ${
            selectedDate !== 'yyyy/mm/dd' ? 'block' : 'hidden'
          }`}
          onClick={() => resetDate()}>
          <BiX></BiX>
        </button>
      </div>
      {datePickerOpen && (
        <div
          title='Datepicker Selector'
          className='datepicker__selector text-xs rounded-2xl border p-3 inline-block absolute left-0 top-full bg-white'>
          <div className='w-full text-xl text-bold my-4 text-center'>
            {getMonthName(activeMonth)}
            <div
              onClick={() => toggleYearSelect(!yearSelect)}
              className={'inline-flex ml-2 p2 relative items-center'}>
              {activeYear}
              {yearSelect && <BiChevronUp></BiChevronUp>}
              {!yearSelect && <BiChevronDown></BiChevronDown>}
              <div
                onMouseLeave={() => toggleYearSelect(false)}
                className={`${
                  yearSelect ? '' : 'hidden'
                } -left-1 top-full grid absolute bg-white border h-80 overflow-auto text-sm`}>
                {selectYears?.map((item, index) => (
                  <button
                    onClick={(e) => updateYear(e.target as HTMLElement)}
                    className={`px-4 py-2 ${index !== 0 ? 'border-t' : ''}`}
                    key={item}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className='grid grid-cols-7 gap-1 text-center font-bold mb-2'>
            {renderWeekDays()}
          </div>
          <div className='datepicker__grid grid grid-cols-7 grid-rows-6 gap-1'>
            {daysOfTheMonth?.map((date) => (
              <button
                className={`col-start-${shiftWeekDays(
                  date.getDay() + 1
                )} text-center ${
                  props.startWeekOnMonday
                    ? shiftWeekDays(date.getDay() + 1) === 6 ||
                      shiftWeekDays(date.getDay() + 1) === 7
                      ? 'text-red-600'
                      : ''
                    : shiftWeekDays(date.getDay() + 1) === 1 ||
                      shiftWeekDays(date.getDay() + 1) === 7
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
          <div className='w-full flex items-center justify-center text-xl mt-2'>
            {prevArrowVisibility() && (
              <button
                className={'mr-3'}
                title='Previous Month'
                onClick={() => handleDateRange(+activeMonth, false)}>
                {<BiChevronLeft></BiChevronLeft>}
              </button>
            )}
            <button
              className={`${prevArrowVisibility() ? '' : 'ml-8'}${
                nextArrowVisibility() ? '' : 'mr-8'
              }`}
              onClick={(e) => updateSelectedDate(e)}
              data-testid={props.testButtonId}
              data-date={tempDate}>
              Today
            </button>
            {nextArrowVisibility() && (
              <button
                className={'ml-3'}
                title='Next Month'
                onClick={() => handleDateRange(+activeMonth, true)}>
                {<BiChevronRight></BiChevronRight>}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
