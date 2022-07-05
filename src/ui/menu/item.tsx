import { FC } from 'react';

export interface ItemProps {}

export const Item: FC<ItemProps> = ({ children }) => {
  return <div>{children}</div>;
};
