import React, { FormEvent, useState } from 'react';
import { DayPicker } from '../day-picker/day-picker';
import s from './aside.module.css';
import { AsideResizable } from './aside-resizable';
import {
  useProjectAddMutation,
  useProjectCollectionQuery,
} from '../../generated/graphql';
import { MenuGroup } from '../menu/menu-group';
import { Section } from '../menu/section';
import { LinkItem } from '../menu/link-item';
import { useAtom } from 'jotai';
import { dateAtom } from '../../atoms/date';
import { useNavigate } from 'react-router-dom';
import { formatISO } from 'date-fns';

export interface AsideProps {
  readonly isVisible: boolean;
}

export const Aside: React.FC<AsideProps> = ({ isVisible }) => {
  const [date, setDate] = useAtom(dateAtom);
  const navigate = useNavigate();
  const [add] = useProjectAddMutation();
  const [projectAddForm, setProjectAddForm] = useState({ name: '' });
  const onProjectAddSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await add({ variables: { input: projectAddForm } });
  };

  const onDaySelect = (value?: Date) => {
    if (value) {
      const dateISO = formatISO(value, { representation: 'date' });
      navigate(`/schedule/${dateISO}`);
    } else {
      setDate(undefined);
      navigate('/all');
    }
  };

  const { loading, error, data } = useProjectCollectionQuery({
    fetchPolicy: 'cache-first',
  });

  if (error) return <>`Error! ${error.message}`</>;

  return (
    <div className={isVisible ? s.aside : `${s.aside} ${s.asideVisible}`}>
      <AsideResizable minWidth={250} maxWidth={600}>
        <div style={{ margin: '1rem' }}>
          <DayPicker
            shouldFitContainer
            showOutsideDays
            mode="single"
            selected={date}
            onSelect={onDaySelect}
          />
          <MenuGroup>
            <Section title={'Filters'}>
              <LinkItem
                to={`/filter/trash`}
                className={({ isActive }) =>
                  isActive
                    ? `${s['menu-title']} ${s['menu-title--active']}`
                    : s['menu-title']
                }
              >
                Trash
              </LinkItem>
            </Section>
            <Section title={'Projects'}>
              {loading ? null : (
                <>
                  {data!.projectCollection!.map((project: any) => (
                    <LinkItem
                      key={project.id}
                      to={`/project/${project.id}`}
                      className={({ isActive }) =>
                        isActive
                          ? `${s['menu-title']} ${s['menu-title--active']}`
                          : s['menu-title']
                      }
                    >
                      {project.name}
                    </LinkItem>
                  ))}
                </>
              )}
            </Section>
          </MenuGroup>
          <form onSubmit={onProjectAddSubmit}>
            <input
              type="text"
              placeholder={'Project name'}
              value={projectAddForm.name}
              onChange={event =>
                setProjectAddForm({
                  ...projectAddForm,
                  name: event.target.value,
                })
              }
            />
            <button type={'submit'}>Add</button>
          </form>
        </div>
      </AsideResizable>
    </div>
  );
};
