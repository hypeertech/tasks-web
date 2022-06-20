import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import s from './aside-resizable.module.css';

export interface AsideResizableProps {
  readonly minWidth: number;
  readonly maxWidth: number;
}

export const AsideResizable: React.FC<AsideResizableProps> = ({
  minWidth,
  maxWidth,
  children,
}) => {
  const initialWidth = Number(localStorage.getItem('asideWidth'));

  const [{ width }, api] = useSpring(() => ({
    width: initialWidth,
    config: config.stiff,
  }));

  const bind = useGesture(
    {
      onDrag: ({ offset: [ox] }) => {
        api.start({ width: initialWidth! + ox });
      },
      onDragEnd: ({ offset: [ox] }) =>
        localStorage.setItem('asideWidth', String(initialWidth + ox)),
    },
    {
      drag: {
        bounds: {
          left: -initialWidth! + minWidth,
          right: maxWidth - initialWidth!,
        },
      },
    }
  );

  return (
    <animated.aside
      className={s.container}
      style={{ width, minWidth, maxWidth }}
    >
      {children}
      <div className={s.resizer} {...bind()} />
    </animated.aside>
  );
};
