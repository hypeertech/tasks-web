import { ChangeEvent, FC, useEffect, useRef } from 'react';
import s from './task-title.module.css';

export interface TaskTitleProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TaskTitle: FC<TaskTitleProps> = ({ value, onChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = textareaRef.current!;
    el.setAttribute(
      'style',
      'height:' + el.scrollHeight + 'px;overflow-y:hidden;'
    );
    el.focus();
    el.setSelectionRange(el.value.length, el.value.length);
  }, []);

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const el = textareaRef.current!;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
    onChange(event);
  };

  return (
    <textarea
      className={s.textarea}
      rows={1}
      ref={textareaRef}
      value={value}
      onChange={handleOnChange}
    />
  );
};
