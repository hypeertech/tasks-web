import React, { FC, Fragment, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAtom } from 'jotai';
import { formatISO, parseISO } from 'date-fns';
import {
  TaskFieldsFragment,
  useSchedulePageQuery,
} from '../../generated/graphql';
import { dateAtom } from '../../atoms/date';
import { TaskList } from '../../ui/task-list/task-list';
import { Header } from '../../ui/header/header';

export const PageScheduleDate: FC = () => {
  const location = useLocation();
  const [date, setDate] = useAtom(dateAtom);
  const { date: dateParam } = useParams<{ date: string }>();

  useEffect(() => {
    setDate(parseISO(dateParam!));
  }, [location]);

  const { loading, error, data } = useSchedulePageQuery({
    variables: {
      filter: {
        dueDate: formatISO(date || new Date(), { representation: 'date' }),
        isRemoved: false,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      <Header date={date} />
      <TaskList tasks={data!.taskCollection! as TaskFieldsFragment[]} />
    </Fragment>
  );
};
