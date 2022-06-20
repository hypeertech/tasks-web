import React from 'react';
import { format, isToday, isTomorrow, isYesterday } from 'date-fns';
import s from './header.module.css';
import { Calendar } from '../icons/calendar';

export interface HeaderProps {
  readonly title?: string;
  readonly date?: Date;
}

export const Header: React.FC<HeaderProps> = ({ title, date }) => {
  if (date) {
    const prefix = () => {
      if (isToday(date)) return 'Today';
      if (isTomorrow(date)) return 'Tmr';
      if (isYesterday(date)) return 'Ytd';

      return format(date, 'EEE');
    };

    const suffix = () => {
      if (isToday(date) || isTomorrow(date) || isYesterday(date)) {
        return format(date, 'EEE MMM d');
      }

      return format(date, 'MMM d');
    };

    return (
      <header className={s.header}>
        <div className={s.icon}>
          <Calendar />
        </div>
        <h1 className={s.title}>
          {prefix()}
          <sub className={s.sub}>{suffix()}</sub>
        </h1>
      </header>
    );
  }

  return (
    <header className={s.header}>
      <div className={s.icon}>
        <Calendar />
      </div>
      <h1 className={s.title}>{title}</h1>
    </header>
  );
};
