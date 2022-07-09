import React from 'react';
import {
  Project,
  ProjectFieldsFragment,
  useTaskAddMutation,
} from '../../generated/graphql';
import { Popover } from '../popover/popover';
import { DayPicker } from '../day-picker/day-picker';

export interface TaskAddProps {
  readonly projects: ProjectFieldsFragment[];
  readonly defaultProjectId?: Project['id'];
  readonly defaultDueDate?: Date;
}

export const TaskAdd: React.FC<TaskAddProps> = ({
  projects,
  defaultProjectId,
  defaultDueDate,
}) => {
  const [form, setForm] = React.useState<{
    title: string;
    projectId: string;
    dueDate?: Date;
  }>({
    title: '',
    dueDate: defaultDueDate,
    projectId: defaultProjectId,
  });
  const [add] = useTaskAddMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await add({ variables: { input: form } });
    setForm({ ...form, title: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={'text'}
        placeholder={'Task title'}
        value={form.title}
        onChange={event => setForm({ ...form, title: event.target.value })}
      />
      <Popover
        render={({ close, labelId, descriptionId }) => (
          <DayPicker
            showOutsideDays
            required
            mode="single"
            // @ts-ignore
            selected={form.dueDate}
            onSelect={value => setForm({ ...form, dueDate: value })}
          />
        )}
      >
        <button>
          {form.dueDate ? form.dueDate.toDateString() : 'Set date'}
        </button>
      </Popover>
      <select
        value={form.projectId}
        onChange={event => setForm({ ...form, projectId: event.target.value })}
      >
        {projects.map(project => (
          <option value={project.id} key={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      <button type={'submit'}>Add</button>
    </form>
  );
};
