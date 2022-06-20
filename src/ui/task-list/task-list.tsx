import React, { FC } from 'react';
import { useQuery } from 'urql';
import { formatISO } from 'date-fns';
import { Task } from '../task/task';
import { TaskAdd } from '../task-add/task-add';

const TASK_COLLECTION = `
  query TaskCollection($filter: TaskFilter) {
    taskCollection(filter: $filter) {
      id
      title
      isCompleted
      dueDate
      project {
        id
        name
      }
    }
  }
`;

export interface TaskListProps {
  readonly filter?: {
    isCompleted?: boolean;
    isRemoved?: boolean;
    dueDate?: Date;
    project?: string | string[];
  };
}

export const TaskList: FC<TaskListProps> = ({ filter }) => {
  const [result, reexecuteQuery] = useQuery({
    query: TASK_COLLECTION,
    variables: {
      filter: {
        isCompleted:
          filter?.isCompleted !== undefined ? filter.isCompleted : undefined,
        isRemoved:
          filter?.isRemoved !== undefined ? filter.isRemoved : undefined,
        dueDate: filter?.dueDate
          ? formatISO(filter.dueDate, { representation: 'date' })
          : null,
        project: filter?.project ? filter.project : null,
      },
    },
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <React.Fragment>
      <TaskAdd />
      {data.taskCollection
        .filter((task: any) => !task.isCompleted)
        .map((task: any) => (
          <Task {...task} key={task.id} />
        ))}
      {data.taskCollection
        .filter((task: any) => task.isCompleted)
        .map((task: any) => (
          <Task {...task} key={task.id} />
        ))}
    </React.Fragment>
  );
};
