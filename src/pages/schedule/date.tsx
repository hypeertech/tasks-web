import React, { FC, Fragment, useEffect } from 'react';
import { parseISO } from 'date-fns';
import { useAtom } from 'jotai';
import { TaskList } from '../../ui/task-list/task-list';
import { useLocation, useParams } from 'react-router-dom';
import { dateAtom } from '../../atoms/date';
import { Header } from '../../ui/header/header';

export const PageScheduleDate: FC = () => {
  const location = useLocation();
  const [date, setDate] = useAtom(dateAtom);
  const { date: dateParam } = useParams<{ date: string }>();

  useEffect(() => {
    setDate(parseISO(dateParam!));
  }, [location]);

  return (
    <Fragment>
      <Header date={date} />
      <TaskList filter={{ dueDate: date, isRemoved: false }} />
    </Fragment>
  );
};
