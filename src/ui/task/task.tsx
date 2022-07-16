import React from 'react';
import { isEqual, parseISO } from 'date-fns';
import { useClickAway } from 'react-use';
import s from './task.module.css';
import { Checkbox } from '../checkbox/checkbox';
import { TaskTitle } from '../task-title/task-title';
import { Popover } from '../popover/popover';
import { DayPicker } from '../day-picker/day-picker';
import { Tag } from '../tag/tag';
import {
  useTaskEditMutation,
  useTaskRemoveMutation,
} from '../../generated/graphql';
import { DatePickerField } from '../date-picker-field/date-picker-field';

export interface TaskProps {
  readonly id: string;
  readonly title: string;
  readonly isCompleted: boolean;
  readonly dueDate: string | null;
  readonly project: {
    id: string;
    name: string;
  };
  readonly onCheckboxChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export const Task: React.FC<TaskProps> = ({
  id,
  title,
  isCompleted,
  dueDate,
  project,
  onCheckboxChange,
}) => {
  const boxRef = React.useRef<HTMLDivElement>(null);
  const [isActive, setActive] = React.useState<boolean>(false);
  const [taskTitle, setTaskTitle] = React.useState<string>(title);
  const [taskDueDate, setTaskDueDate] = React.useState<Date | null>(
    dueDate ? parseISO(dueDate) : null
  );

  const [edit] = useTaskEditMutation();
  const [remove] = useTaskRemoveMutation();

  useClickAway(boxRef, async () => {
    setActive(false);

    const isDueDateChanged = () => {
      if (dueDate !== null && taskDueDate !== null) {
        return !isEqual(parseISO(dueDate), taskDueDate);
      } else {
        return dueDate !== taskDueDate;
      }
    };

    if (title !== taskTitle || isDueDateChanged()) {
      await edit({
        variables: { input: { id, title: taskTitle, dueDate: taskDueDate } },
      });
    }
  });

  const onBoxClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    if (!event.target.closest('.check')) {
      setActive(true);
    }
  };

  return (
    <div
      ref={boxRef}
      onClick={onBoxClick}
      className={`${s.task} ${isActive ? s.active : ''}`}
    >
      <div className={'check'}>
        <Checkbox
          uid={id}
          isChecked={isCompleted}
          onChange={onCheckboxChange}
        />
      </div>

      <div className={s.main}>
        {isActive ? (
          <>
            <TaskTitle
              value={taskTitle}
              onChange={event => {
                setTaskTitle(event.target.value);
              }}
            />
            <Tag text={project.name} />
            <DatePickerField
              // @ts-ignore
              value={taskDueDate}
              onChange={value => setTaskDueDate(value!)}
            />
            <button
              onClick={async () => {
                await remove({ variables: { input: { id } } });
              }}
            >
              X
            </button>
          </>
        ) : (
          <>
            <p className={s.title}>{taskTitle}</p>
            <Tag text={project.name} />
          </>
        )}
      </div>
    </div>
  );
};
