import React from 'react';
import { useAtom } from 'jotai';
import { DayPicker as _DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './day-picker.scss';
import { dateAtom } from '../../atoms/date';
import { useNavigate } from 'react-router-dom';
import { formatISO } from 'date-fns';

export const DayPicker: React.FC = () => {
  const [date, setDate] = useAtom(dateAtom);
  const navigate = useNavigate();

  const onSelect = (value?: Date) => {
    if (value) {
      const dateISO = formatISO(value, { representation: 'date' });
      navigate(`/schedule/${dateISO}`);
    } else {
      setDate(undefined);
      navigate('/all');
    }
  };

  return (
    <div className="day-picker">
      <_DayPicker
        showOutsideDays
        mode="single"
        selected={date}
        onSelect={onSelect}
      />
    </div>
  );
};
