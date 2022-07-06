import React from 'react';
import {
  DayPicker as _DayPicker,
  DayPickerProps as _DayPickerProps,
} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './day-picker.scss';

export interface DayPickerProps {
  readonly shouldFitContainer?: boolean;
}

export const DayPicker: React.FC<_DayPickerProps & DayPickerProps> = props => {
  const { shouldFitContainer, ...defaultProps } = props;

  return (
    <div
      className={
        shouldFitContainer
          ? 'day-picker day-picker--fit-container'
          : 'day-picker'
      }
    >
      <_DayPicker {...defaultProps} />
    </div>
  );
};
