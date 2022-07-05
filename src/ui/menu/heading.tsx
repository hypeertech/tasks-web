import { FC } from 'react';

export interface HeadingProps {}

export const Heading: FC<HeadingProps> = ({ children }) => {
  return <div>{children}</div>;
};
