import React, { useState, MouseEvent, useRef, Fragment } from 'react';
import { useMutation } from 'urql';
import s from './task.module.css';
import { Checkbox } from '../checkbox/checkbox';
import { useClickAway } from 'react-use';
import { TaskTitle } from '../task-title/task-title';
import { DateInput } from '../date-input/date-input';
import { DayPicker } from 'react-day-picker';
import { isEqual, parseISO } from 'date-fns';

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

const TASK_EDIT = `
  mutation TaskEdit($input: TaskEditInput!) {
    task {
      edit(input: $input) {
        record {
          id
          title
          isCompleted
          isRemoved
          dueDate
          ownerId
        }
        recordId
      }
    }
  }
`;

const TASK_REMOVE = `
  mutation TaskRemove($input: TaskRemoveInput!) {
    task {
      remove(input: $input) {
        record {
          id
          isRemoved
        }
      }
    }
  }
`;

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

  const [editResult, edit] = useMutation(TASK_EDIT);
  const [removeResult, remove] = useMutation(TASK_REMOVE);

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
      await edit({ input: { id, title: taskTitle, dueDate: taskDueDate } });
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
            await edit({ input: { id, isCompleted: event.target.checked } });
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
            <span className={s.project}>{project.name}</span>
            <DateInput
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
            </DateInput>
            <button
              onClick={async () => {
                await remove({ input: { id } });
              }}
            >
              X
            </button>
          </>
        ) : (
          <Fragment>
            <p className={s.title}>{taskTitle}</p>
            <span className={s.project}>{project.name}</span>
          </Fragment>
        )}
      </div>
    </div>
  );
};
