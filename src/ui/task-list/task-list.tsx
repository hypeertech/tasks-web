import React, { FC } from 'react';
import { Task } from '../task/task';
import { TaskFieldsFragment } from '../../generated/graphql';

export interface TaskListProps {
  tasks: TaskFieldsFragment[];
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <React.Fragment>
      {tasks
        .filter((task: any) => !task.isCompleted)
        .map((task: any) => (
          <Task {...task} key={task.id} />
        ))}
      {tasks
        .filter((task: any) => task.isCompleted)
        .map((task: any) => (
          <Task {...task} key={task.id} />
        ))}
    </React.Fragment>
  );
};
