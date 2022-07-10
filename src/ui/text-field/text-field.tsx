import React from 'react';
import s from './text-field.module.css';

export interface TextFieldProps {}

export const TextField: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = props => {
  return (
    <div className={s.box}>
      <input className={s.input} {...props} />
    </div>
  );
};
