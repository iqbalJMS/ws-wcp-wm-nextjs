import { useState, useRef, useMemo, useCallback } from 'react';
import useOnClickOutside from '@/lib/hook/useOnClickOutside';
import { ArrowDownIcon } from '@/lib/element/global/icons/arrow-down-icon';
import { T_InputState } from '@/lib/element/client/input';
import { DateIcon } from '@/lib/element/global/icons/date-icon';

export type T_InputDateValue =
  | {
      start?: string;
      end?: string;
    }
  | string;

type T_InputDatePickerDay = {
  dayOfWeek: number;
  day: string;
  dayName: string;
  month: string;
  year: string;
  date: Date;
  dateFormat: string;
};

type T_InputDateType = 'single' | 'multiple';

type T_InputDatePickerProps = {
  value?: T_InputDateValue;
  disabled?: boolean;
  state?: T_InputState;
  type?: T_InputDateType;
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: T_InputDateValue) => void;
};

function formatDate(date: Date, format: string): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Pad single digits with leading zeros
  const formattedDay = day < 10 ? `0${day}` : day.toString();
  const formattedMonth = month < 10 ? `0${month}` : month.toString();

  // Array of month names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Array of day names abbreviated to single letter
  const dayNamesAbbrev = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dayNamesIndex = [1, 2, 3, 4, 5, 6, 7];

  const monthName = monthNames[date.getMonth()];
  const dayOfWeekAbbrev = dayNamesAbbrev[date.getDay()];

  switch (format) {
    case 'YYYY-MM-DD':
      return `${year}-${formattedMonth}-${formattedDay}`;
    case 'DD':
      return `${formattedDay}`;
    case 'ddd':
      return `${dayOfWeekAbbrev}`;
    case 'e':
      return `${dayNamesIndex[date.getDay()]}`;
    case 'MM':
      return `${formattedMonth}`;
    case 'MMMM':
      return `${monthName}`;
    case 'YYYY':
      return `${year}`;
    // Add more cases for other formats as needed
    default:
      throw new Error(`Unsupported date format: ${format}`);
  }
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function actionDays(date: Date, days: number, type: 'add' | 'substract'): Date {
  const result = new Date(date);
  switch (type) {
    case 'add':
      result.setDate(result.getDate() + days);
      break;
    case 'substract':
      result.setDate(result.getDate() - days);
      break;
  }

  return result;
}

function actionMonths(
  date: Date,
  months: number,
  type: 'add' | 'substract'
): Date {
  const result = new Date(date);
  switch (type) {
    case 'add':
      result.setMonth(result.getMonth() + months);
      break;
    case 'substract':
      result.setMonth(result.getMonth() - months);
      break;
  }

  return result;
}

const format = {
  date: 'YYYY-MM-DD',
  day: 'DD',
  dayName: 'ddd',
  dayOfWeek: 'e',
  month: 'MM',
  monthName: 'MMMM',
  year: 'YYYY',
};

const InputDatePicker = ({
  value = {},
  disabled = false,
  state = 'init',
  type = 'single',
  placeholder,
  onChange,
}: T_InputDatePickerProps) => {
  const [now] = useState(new Date());

  const [active, setActive] = useState(false);
  const [form, setForm] = useState({
    month: formatDate(now, format.month),
    year: formatDate(now, format.year),
  });
  const [card, setCard] = useState({ year: false });
  const [tempValue, setTempValue] = useState({ year: 2023 });

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = formatDate(now, format.date);

  const yearMonth = useMemo(() => `${form.year}/${form.month}/01`, [form]);
  const monthName = useMemo(
    () => formatDate(new Date(yearMonth), format.monthName),
    [yearMonth]
  );

  const years = useMemo(() => {
    const newYears = [];
    const year = tempValue.year;
    for (let index = 0; index < 9; index++) {
      newYears.push(year - index);
    }
    return newYears.sort((a, b) => a - b);
  }, [tempValue]);

  const element = useRef<HTMLDivElement>(null);
  useOnClickOutside(element, () => {
    setActive(false);
  });

  const getDayObject = (date: Date): T_InputDatePickerDay => ({
    dayOfWeek: parseInt(formatDate(date, format.dayOfWeek)),
    day: formatDate(date, format.day),
    dayName: formatDate(date, format.dayName),
    month: formatDate(date, format.month),
    year: formatDate(date, format.year),
    date,
    dateFormat: formatDate(date, format.date),
  });

  const days = useMemo(() => {
    const daysInMonth = getDaysInMonth(
      parseInt(formatDate(new Date(yearMonth), format.year)),
      parseInt(formatDate(new Date(yearMonth), format.month))
    );

    const data: T_InputDatePickerDay[] = [];
    for (let index = 0; index < daysInMonth; index++) {
      const date = actionDays(new Date(yearMonth), index, 'add');

      const dayOfWeek = parseInt(formatDate(date, format.dayOfWeek));

      if (index === 0) {
        for (let subIndex = 0; subIndex < dayOfWeek - 1; subIndex++) {
          data.push(
            getDayObject(
              actionDays(new Date(date), dayOfWeek - 1 - subIndex, 'substract')
            )
          );
        }
      }

      data.push(getDayObject(date));
      if (index === daysInMonth - 1) {
        let add = 1;
        for (let subIndex = dayOfWeek + 1; subIndex <= 7; subIndex++) {
          data.push(getDayObject(actionDays(new Date(date), add, 'add')));
          add++;
        }
      }
    }
    return data;
  }, [yearMonth]);

  const isValueString = (val: T_InputDateValue): val is string =>
    typeof val === 'string';

  const newValue = useMemo(() => {
    if (!value) return '';
    if (isValueString(value)) {
      return formatDate(new Date(value), format.date);
    }
    return `${value.start ? formatDate(new Date(value.start), format.date) : ''} ${value.end ? '-' : ''} ${value.end ? formatDate(new Date(value.end), format.date) : ''}`;
  }, [value]);

  const dayState = useCallback(
    (dayItem: T_InputDatePickerDay) => {
      if (!value) return 'init';
      if (isValueString(value)) {
        if (dayItem.dateFormat === value) return 'active';
      } else {
        if (dayItem.dateFormat === value.start) return 'active-start';
        if (dayItem.dateFormat === value.end) return 'active-end';
        if (
          value.start &&
          value.end &&
          dayItem.dateFormat > value.start &&
          dayItem.dateFormat < value.end
        )
          return 'beetween';
      }
      return 'init';
    },
    [value]
  );

  const handleMonthNavigation = (navigation: 'next' | 'previous') => {
    let date = new Date(yearMonth);
    date =
      navigation === 'next'
        ? actionMonths(date, 1, 'add')
        : actionMonths(date, 1, 'substract');

    setForm({
      month: formatDate(date, format.month),
      year: formatDate(date, format.year),
    });
  };

  const handleChooseDate = (dayItem: T_InputDatePickerDay) => {
    if (type === 'single') {
      onChange(new Date(dayItem.dateFormat).toISOString());
      setActive(false);
    } else {
      if (!isValueString(value)) {
        const newForm: T_InputDateValue = {
          start: value.start,
          end: value.end,
        };
        if (newForm.start && newForm.end) {
          newForm.start = dayItem.dateFormat;
          newForm.end = '';
        } else if (!value.start) {
          newForm.start = dayItem.dateFormat;
        } else if (value.start < dayItem.dateFormat) {
          newForm.end = dayItem.dateFormat;
          setActive(false);
        } else if (value.start > dayItem.dateFormat) {
          newForm.start = dayItem.dateFormat;
        }
        onChange(newForm);
      }
    }
  };

  const handleReset = () => {
    if (type === 'single') {
      onChange('');
    } else {
      onChange({ start: '', end: '' });
    }
    setActive(false);
  };

  const handleYearNavigation = (navigation: 'next' | 'previous') => {
    setTempValue({
      year: navigation === 'next' ? years[years.length - 1] + 9 : years[0] - 1,
    });
  };

  const handleChooseYear = (year: number) => {
    setForm((prevForm) => ({ ...prevForm, year: year.toString() }));
    setCard({ year: false });
  };

  const handleChangeYear = () => {
    setTempValue({ year: parseInt(form.year) });
    setCard({ year: true });
  };

  return (
    <div ref={element} className="relative">
      <div
        className={`h-12 border px-4 flex items-center justify-between w-full cursor-pointer group relative z-10 rounded-2xl ${
          disabled ? 'bg-black bg-opacity-30' : 'bg-transparent'
        } ${
          active
            ? 'border-blue-01 border-opacity-50 ring-4 ring-light-02 ring-opacity-30'
            : state === 'error'
              ? 'border-red-500'
              : 'border-black focus-within:border-opacity-80'
        }`}
        onClick={() => setActive((prev) => !prev)}
      >
        <div className="flex items-center">
          <div>
            <div className={`${newValue ? '' : 'text-black/50 font-medium'}`}>
              {newValue ? newValue : placeholder}
            </div>
          </div>
        </div>
        <div>
          <DateIcon
            className={`transition-all duration-300 ease-out w-4 h-4 text-black`}
          />
        </div>
      </div>
      {active && (
        <div className="p-4 rounded-md bg-white inline-block absolute top-full left-0 mt-2 shadow-md z-40">
          {!card.year ? (
            <>
              <div className="mb-2">
                <div className="flex items-center justify-between">
                  <div
                    className="cursor-pointer w-8 h-8 hover:bg-blue-02 group flex items-center justify-center rounded-sm"
                    onClick={() => handleMonthNavigation('previous')}
                  >
                    <ArrowDownIcon className="w-1/3 h-1/3 group-hover:text-white transform rotate-90" />
                  </div>
                  <div>
                    <div className="font-medium text-xs">
                      {monthName},
                      <span
                        className="cursor-pointer inline-block bg-blue-50 text-blue01 py-1 px-2 rounded-md ml-2"
                        onClick={handleChangeYear}
                      >
                        {form.year}
                      </span>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer w-8 h-8 hover:bg-blue-02 group flex items-center justify-center rounded-sm"
                    onClick={() => handleMonthNavigation('next')}
                  >
                    <ArrowDownIcon className="w-1/3 h-1/3 group-hover:text-white transform -rotate-90" />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div className="grid grid-cols-7-30">
                  {dayNames.map((dayNameItem) => (
                    <div key={dayNameItem} className="w-8 h-8">
                      <div className="h-full w-full flex items-center justify-center">
                        <div className="text-center text-xs">{dayNameItem}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7-30">
                  {days.map((dayItem, index) => (
                    <div key={index} className="h-8 w-8 mb-2">
                      <div
                        className={`w-full h-full flex items-center justify-center cursor-pointer ${
                          dayItem.dayOfWeek === 0 ? 'rounded-l-md' : ''
                        } ${dayItem.dayOfWeek === 6 ? 'rounded-r-md' : ''} ${
                          dayState(dayItem) === 'active' ||
                          dayState(dayItem) === 'active-start' ||
                          dayState(dayItem) === 'active-end' ||
                          dayState(dayItem) === 'beetween'
                            ? 'bg-blue-01 '
                            : ''
                        } ${
                          dayState(dayItem) === 'beetween'
                            ? 'bg-opacity-60'
                            : 'bg-opacity-90'
                        } ${
                          dayState(dayItem) === 'active' ||
                          dayState(dayItem) === 'active-start' ||
                          dayState(dayItem) === 'active-end'
                            ? 'rounded-md'
                            : 'hover:bg-blue-50 rounded-md'
                        }`}
                        onClick={() => handleChooseDate(dayItem)}
                      >
                        <div
                          className={`w-full h-full flex flex-col items-center justify-center group relative ${
                            dayState(dayItem) === 'active' ||
                            dayState(dayItem) === 'active-start'
                              ? 'bg-blue-01 bg-opacity-60 rounded-l-md'
                              : ''
                          } ${
                            dayState(dayItem) === 'active' ||
                            dayState(dayItem) === 'active-end'
                              ? 'bg-blue-01 bg-opacity-60 rounded-r-md'
                              : ''
                          }`}
                        >
                          <div
                            className={`text-xs text-center ${
                              dayState(dayItem) === 'active' ||
                              dayState(dayItem) === 'active-start' ||
                              dayState(dayItem) === 'active-end' ||
                              dayState(dayItem) === 'beetween'
                                ? 'text-white'
                                : dayItem.month !== form.month
                                  ? 'text-black text-opacity-25'
                                  : ''
                            }`}
                          >
                            {dayItem.day}
                          </div>
                          {today === dayItem.dateFormat && (
                            <div className="w-full absolute bottom-1 left-0 flex items-center justify-center">
                              <div
                                className={`w-1 h-1 rounded-full ${
                                  dayState(dayItem) === 'active'
                                    ? 'bg-white'
                                    : form.month === dayItem.month
                                      ? 'bg-blue-01'
                                      : ''
                                }`}
                              ></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center -mx-2">
                  <div className="px-2">
                    <div
                      className="rounded-md p-4 py-1 border border-blue-02 border-opacity-50 inline-block cursor-pointer"
                      onClick={handleReset}
                    >
                      <div className="text-blue-02 text-xs">Reset</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-2">
                <div className="flex items-center justify-between">
                  <div
                    className="cursor-pointer w-8 h-8 hover:bg-blue-02 group flex items-center justify-center rounded-md"
                    onClick={() => handleYearNavigation('previous')}
                  >
                    <ArrowDownIcon className="w-1/3 h-1/3 group-hover:text-white transform rotate-90" />
                  </div>
                  <div>
                    <div className="text-xs font-medium">
                      {years[0]} - {years[years.length - 1]}
                    </div>
                  </div>
                  <div
                    className="cursor-pointer w-8 h-8 hover:bg-blue-02 group flex items-center justify-center rounded-md"
                    onClick={() => handleYearNavigation('next')}
                  >
                    <ArrowDownIcon className="w-1/3 h-1/3 group-hover:text-white transform -rotate-90" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3-70">
                {years.map((yearItem) => (
                  <div key={yearItem}>
                    <div
                      className="text-xs text-center py-2 hover:bg-blue-50 cursor-pointer rounded-md"
                      onClick={() => handleChooseYear(yearItem)}
                    >
                      {yearItem}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default InputDatePicker;
