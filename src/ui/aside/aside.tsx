import React, { FormEvent, useState } from 'react';
import { DayPicker } from '../day-picker/day-picker';
import s from './aside.module.css';
import { AsideResizable } from './aside-resizable';
import { useMutation, useQuery } from 'urql';
import { NavLink } from 'react-router-dom';

const PROJECT_COLLECTION = `
  query ProjectCollection {
    projectCollection {
      id
      name
    }
  }
`;

const PROJECT_ADD = `
  mutation ProjectAdd($input: ProjectAddInput!) {
    project {
      add(input: $input) {
        record {
          id
          name
        }
      }
    }
  }
`;

export const Aside: React.FC = () => {
  const [result, reexecuteQuery] = useQuery({
    query: PROJECT_COLLECTION,
  });

  const [addResult, add] = useMutation(PROJECT_ADD);
  const [projectAddForm, setProjectAddForm] = useState({ name: '' });
  const onProjectAddSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await add({ input: projectAddForm });
  };

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

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
              <ul>
                {data.projectCollection.map((project: any) => (
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
