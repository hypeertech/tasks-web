import React, { FC, Fragment } from 'react';
import {
  TaskFieldsFragment,
  useTrashPageQuery,
} from '../../../generated/graphql';
import { Header } from '../../../ui/header/header';
import { TaskList } from '../../../ui/task-list/task-list';

export const PageFilterTrash: FC = () => {
  const { loading, error, data } = useTrashPageQuery({
    variables: {
      filter: {
        isRemoved: true,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      <Header title="Trash" />
      <TaskList tasks={data!.taskCollection! as TaskFieldsFragment[]} />
    </Fragment>
  );
};
