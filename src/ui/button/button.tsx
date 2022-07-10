import React from 'react';
import s from './button.module.css';

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = props => {
  const { children, ...buttonProps } = props;
  return (
    <button className={s.button} {...buttonProps}>
      {children}
    </button>
  );
};
