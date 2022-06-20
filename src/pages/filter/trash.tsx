import React, { FC, Fragment } from 'react';
import { Header } from '../../ui/header/header';
import { TaskList } from '../../ui/task-list/task-list';

export const PageFilterTrash: FC = () => {
  return (
    <Fragment>
      <Header title="Trash" />
      <TaskList filter={{ isRemoved: true }} />
    </Fragment>
  );
};
