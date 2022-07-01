import React, { FC, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useProjectPageQuery } from '../../generated/graphql';
import { Header } from '../../ui/header/header';
import { TaskList } from '../../ui/task-list/task-list';

export const PageProjectId: FC = () => {
  const { id: projectId } = useParams<{ id: string }>();

  const { loading, error, data } = useProjectPageQuery({
    variables: {
      filter: {
        isRemoved: false,
        project: projectId,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      <Header title={data!.taskCollection![0]?.project?.name || 'Project'} />
      <TaskList tasks={data!.taskCollection!} />
    </Fragment>
  );
};
