import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TaskAdd } from './task-add';

export default {
  title: 'TaskAdd',
  component: TaskAdd,
} as ComponentMeta<typeof TaskAdd>;

const Template: ComponentStory<typeof TaskAdd> = args => <TaskAdd {...args} />;

export const Default = Template.bind({});

Default.args = {
  defaultProjectId: '0',
  projects: [
    {
      id: '0',
      name: 'Inbox',
    },
  ],
};
