import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import s from './auth.module.css';

export const Auth: FC = () => {
  return (
    <div className={s.box}>
      <Outlet />
    </div>
  );
};
