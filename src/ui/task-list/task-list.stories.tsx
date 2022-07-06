import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TaskList } from './task-list';

export default {
  title: 'TaskList',
  component: TaskList,
  argTypes: {
    date: { control: 'date' },
  },
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = args => (
  <TaskList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  tasks: [
    {
      id: '0',
      title: 'Buy milk',
      isCompleted: false,
      isRemoved: false,
      projectId: '0',
      project: {
        id: '0',
        name: 'Inbox',
      },
      ownerId: '0',
      owner: {
        id: '0',
      },
    },
    {
      id: '1',
      title: 'Buy milk',
      isCompleted: false,
      isRemoved: false,
      projectId: '0',
      project: {
        id: '0',
        name: 'Inbox',
      },
      ownerId: '0',
      owner: {
        id: '0',
      },
    },
  ],
};
