import React, { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import s from './link-item.module.css';

export interface LinkItemProps {}

export const LinkItem: FC<
  NavLinkProps & React.RefAttributes<HTMLAnchorElement> & LinkItemProps
> = props => {
  return (
    <NavLink {...props}>
      <div className={s.box}>
        <span className={s.title}>{props.children}</span>
      </div>
    </NavLink>
  );
};
