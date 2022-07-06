import { FC } from 'react';
import s from './tag.module.css';

export interface TagProps {
  // Text to be displayed in the tag.
  readonly text: string;
}

export const Tag: FC<TagProps> = ({ text }) => {
  return <div className={s.box}>{text}</div>;
};
