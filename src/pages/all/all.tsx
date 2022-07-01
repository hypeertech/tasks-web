import React, { FC, Fragment } from 'react';
import { TaskList } from '../../ui/task-list/task-list';
import { Header } from '../../ui/header/header';
import { TaskFieldsFragment, useAllPageQuery } from '../../generated/graphql';

export const PageAll: FC = () => {
  const { loading, error, data } = useAllPageQuery({
    variables: {
      filter: {
        isRemoved: false,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      <Header title="All tasks" />
      <TaskList tasks={data!.taskCollection! as TaskFieldsFragment[]} />
    </Fragment>
  );
};
