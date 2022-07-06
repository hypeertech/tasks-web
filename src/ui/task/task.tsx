import React, { useState, MouseEvent, useRef, Fragment } from 'react';
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

export interface TaskProps {
  readonly id: string;
  readonly title: string;
  readonly isCompleted: boolean;
  readonly dueDate: string | null;
  readonly project: {
    id: string;
    name: string;
  };
}

export const Task: React.FC<TaskProps> = ({
  id,
  title,
  isCompleted,
  dueDate,
  project,
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isActive, setActive] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>(title);
  const [taskDueDate, setTaskDueDate] = useState<Date | null>(
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

  const onBoxClick = (event: MouseEvent<HTMLDivElement>) => {
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
          onChange={async event => {
            if (event.target.checked)
              await new Promise(resolve =>
                setTimeout(async () => resolve(''), 500)
              );
            await edit({
              variables: { input: { id, isCompleted: event.target.checked } },
            });
          }}
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
            <Popover
              render={({ close, labelId, descriptionId }) => (
                <DayPicker
                  showOutsideDays
                  required
                  mode="single"
                  // @ts-ignore
                  selected={taskDueDate}
                  onSelect={value => setTaskDueDate(value!)}
                />
              )}
            >
              <button>
                {taskDueDate ? taskDueDate.toDateString() : 'Set date'}
              </button>
            </Popover>
            <button
              onClick={async () => {
                await remove({ variables: { input: { id } } });
              }}
            >
              X
            </button>
          </>
        ) : (
          <Fragment>
            <p className={s.title}>{taskTitle}</p>
            <Tag text={project.name} />
          </Fragment>
        )}
      </div>
    </div>
  );
};
