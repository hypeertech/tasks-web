import React, { FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DayPicker } from '../day-picker/day-picker';
import s from './aside.module.css';
import { AsideResizable } from './aside-resizable';
import {
  useProjectAddMutation,
  useProjectCollectionQuery,
} from '../../generated/graphql';

export const Aside: React.FC = () => {
  const [add] = useProjectAddMutation();
  const [projectAddForm, setProjectAddForm] = useState({ name: '' });
  const onProjectAddSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await add({ variables: { input: projectAddForm } });
  };

  const { loading, error, data } = useProjectCollectionQuery({
    fetchPolicy: 'cache-first',
  });

  if (error) return <>`Error! ${error.message}`</>;

  return (
    <div className={s.aside}>
      <AsideResizable minWidth={250} maxWidth={600}>
        <div style={{ margin: '1rem' }}>
          <DayPicker />
          <div className={s.menu}>
            <span className={s['menu-title']}>Filters</span>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to={`/filter/trash`}
                    className={({ isActive }) =>
                      isActive
                        ? `${s['menu-title']} ${s['menu-title--active']}`
                        : s['menu-title']
                    }
                  >
                    Trash
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={s.menu}>
            <span className={s['menu-title']}>Projects</span>
            <nav>
              {loading ? null : (
                <ul>
                  {data!.projectCollection!.map((project: any) => (
                    <li key={project.id}>
                      <NavLink
                        to={`/project/${project.id}`}
                        className={({ isActive }) =>
                          isActive
                            ? `${s['menu-title']} ${s['menu-title--active']}`
                            : s['menu-title']
                        }
                      >
                        {project.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </nav>
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
        </div>
      </AsideResizable>
    </div>
  );
};
