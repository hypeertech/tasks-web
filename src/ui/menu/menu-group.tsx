import { FC } from 'react';
import s from './menu-group.module.css';

export const MenuGroup: FC = ({ children }) => {
  return <div className={s.box}>{children}</div>;
};
