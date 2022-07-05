import React, { FC, Fragment } from 'react';
import {
  ProjectFieldsFragment,
  TaskFieldsFragment,
  useAllPageQuery,
} from '../../generated/graphql';
import { Header } from '../../ui/header/header';
import { TaskAdd } from '../../ui/task-add/task-add';
import { TaskList } from '../../ui/task-list/task-list';

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
      <TaskAdd projects={data!.projectCollection as ProjectFieldsFragment[]} />
      <TaskList tasks={data!.taskCollection! as TaskFieldsFragment[]} />
    </Fragment>
  );
};
