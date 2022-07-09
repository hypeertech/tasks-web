import React from 'react';
import { useDebounce } from 'react-use';
import { Task } from '../task/task';
import {
  TaskFieldsFragment,
  useTaskEditMutation,
} from '../../generated/graphql';

export interface TaskListProps {
  tasks: TaskFieldsFragment[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [edit] = useTaskEditMutation();

  const [tasksOnUpdate, setTasksOnUpdate] = React.useState<
    { id: string; isCompleted: boolean }[]
  >([]);
  const [] = useDebounce(
    async () => {
      if (tasksOnUpdate.length > 0) {
        await edit({
          variables: {
            input: tasksOnUpdate,
          },
        });
      }
    },
    1500,
    [tasksOnUpdate]
  );

  const onCheckboxChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    taskId: string
  ): Promise<void> => {
    const task = tasksOnUpdate.find(task => task.id === taskId);

    if (task) {
      if (task.isCompleted !== event.target.checked) {
        return setTasksOnUpdate(prevState => {
          return prevState.filter(task => task.id !== taskId);
        });
      }
    }

    setTasksOnUpdate(prevState => {
      return [...prevState, { id: taskId, isCompleted: event.target.checked }];
    });
  };

  return (
    <>
      {tasks
        .filter((task: any) => !task.isCompleted)
        .map((task: any) => (
          <Task
            {...task}
            key={task.id}
            onCheckboxChange={event => onCheckboxChange(event, task.id)}
          />
        ))}
      {tasks
        .filter((task: any) => task.isCompleted)
        .map((task: any) => (
          <Task
            {...task}
            key={task.id}
            onCheckboxChange={event => onCheckboxChange(event, task.id)}
          />
        ))}
    </>
  );
};
