import React, { FC, Fragment } from 'react';
import { TaskList } from '../ui/task-list/task-list';
import { Header } from '../ui/header/header';

export const PageAll: FC = () => {
  return (
    <Fragment>
      <Header title="All tasks" />
      <TaskList filter={{ isRemoved: false }} />
    </Fragment>
  );
};
