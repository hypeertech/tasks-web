import React from 'react';
import s from './data-picker-field.module.css';
import { DayPicker } from '../day-picker/day-picker';
import { CalendarClock } from '../icons/calendar-clock';
import { Popover } from '../popover/popover';

export interface DatePickerFieldProps {
  readonly value: Date | undefined;
  readonly onChange: (value?: Date) => void;
}

export const DatePickerField: React.FC<DatePickerFieldProps> = props => {
  return (
    <Popover
      render={() => (
        <DayPicker
          showOutsideDays
          required
          mode="single"
          selected={props.value}
          onSelect={props.onChange}
        />
      )}
    >
      <div className={s.box}>
        <div className={s.icon}>
          <CalendarClock />
        </div>
        <span className={s.label}>
          {props.value
            ? props.value.toDateString()
            : 'Set date, time, repeat...'}
        </span>
      </div>
    </Popover>
  );
};
