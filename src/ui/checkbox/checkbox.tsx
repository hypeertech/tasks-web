import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './checkbox.scss';

export interface CheckboxProps {
  readonly uid: string;
  readonly isChecked: boolean;
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  uid,
  isChecked,
  onChange,
}) => {
  const [value, setValue] = useState(isChecked);
  const [{ strokeDashoffset }, api] = useSpring(() => ({
    strokeDashoffset: 13.5,
  }));

  const handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);

    setValue(event.target.checked);

    if (event.target.checked) {
      api.start({ strokeDashoffset: 4.5, delay: 200 });
      setTimeout(() => api.set({ strokeDashoffset: 13.5 }), 800);
    }
  };

  return (
    <label className="checkbox">
      <input type="checkbox" checked={value} onChange={handleOnChange} />
      <svg viewBox="0 0 21 18">
        <symbol
          id={`tick-path-${uid}`}
          viewBox="0 0 21 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69"
            fill="none"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <defs>
          <mask id={`tick-${uid}`}>
            <use className="tick mask" href={`#tick-path-${uid}`} />
          </mask>
        </defs>
        <path
          className="shape"
          d="M1.08722 4.13374C1.29101 2.53185 2.53185 1.29101 4.13374 1.08722C5.50224 0.913124 7.25112 0.75 9 0.75C10.7489 0.75 12.4978 0.913124 13.8663 1.08722C15.4681 1.29101 16.709 2.53185 16.9128 4.13374C17.0869 5.50224 17.25 7.25112 17.25 9C17.25 10.7489 17.0869 12.4978 16.9128 13.8663C16.709 15.4681 15.4682 16.709 13.8663 16.9128C12.4978 17.0869 10.7489 17.25 9 17.25C7.25112 17.25 5.50224 17.0869 4.13374 16.9128C2.53185 16.709 1.29101 15.4681 1.08722 13.8663C0.913124 12.4978 0.75 10.7489 0.75 9C0.75 7.25112 0.913124 5.50224 1.08722 4.13374Z"
        />
        <use
          className="tick"
          href={`#tick-path-${uid}`}
          stroke="currentColor"
        />
        <path
          fill="var(--tick-main-color)"
          mask={`url(#tick-${uid})`}
          d="M4.03909 0.343217C5.42566 0.166822 7.20841 0 9 0C10.7916 0 12.5743 0.166822 13.9609 0.343217C15.902 0.590152 17.4098 2.09804 17.6568 4.03909C17.8332 5.42566 18 7.20841 18 9C18 10.7916 17.8332 12.5743 17.6568 13.9609C17.4098 15.902 15.902 17.4098 13.9609 17.6568C12.5743 17.8332 10.7916 18 9 18C7.20841 18 5.42566 17.8332 4.03909 17.6568C2.09805 17.4098 0.590152 15.902 0.343217 13.9609C0.166822 12.5743 0 10.7916 0 9C0 7.20841 0.166822 5.42566 0.343217 4.03909C0.590151 2.09805 2.09804 0.590152 4.03909 0.343217Z"
        />
      </svg>
      <animated.svg
        className="lines"
        viewBox="0 0 11 11"
        style={{ strokeDashoffset }}
      >
        <path d="M5.88086 5.89441L9.53504 4.26746" />
        <path d="M5.5274 8.78838L9.45391 9.55161" />
        <path d="M3.49371 4.22065L5.55387 0.79198" />
      </animated.svg>
    </label>
  );
};
