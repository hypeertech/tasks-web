import React, { FC, Fragment } from 'react';
import { Header } from '../../ui/header/header';
import { TaskList } from '../../ui/task-list/task-list';
import { useParams } from 'react-router-dom';

export const PageProjectId: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Fragment>
      <Header title="Project" />
      <TaskList filter={{ project: id!, isRemoved: false }} />
    </Fragment>
  );
};
