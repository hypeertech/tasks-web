import React from 'react';
import s from './footer.module.css';
import { DayPicker } from '../day-picker/day-picker';

export const Footer: React.FC = () => {
  const footerRef = React.useRef<HTMLElement>(null);
  const toolbarRef = React.useRef<HTMLDivElement>(null);
  const datePickerRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number>(30);

  const toggle = () => {
    const toolbarHeight = toolbarRef.current!.clientHeight;
    const calendarHeight = datePickerRef.current!.clientHeight;

    if (height === toolbarHeight) {
      setHeight(calendarHeight + toolbarHeight);
    } else {
      setHeight(toolbarHeight);
    }
  };

  return (
    <footer ref={footerRef} className={s.footer} style={{ height: height }}>
      <div ref={toolbarRef} className={s.trigger} onClick={toggle}>
        <div className={s.button} />
      </div>
      <div ref={datePickerRef} style={{ margin: '0 1rem', paddingBottom: '1.5rem' }} >
        <DayPicker />
      </div>
    </footer>
  );
};
