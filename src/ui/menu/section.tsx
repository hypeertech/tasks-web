import { FC } from 'react';
import s from './section.module.css';

export interface SectionProps {
  readonly title?: string;
}

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <div>
      {title ? <div className={s.title}>{title}</div> : null}
      {children}
    </div>
  );
};
