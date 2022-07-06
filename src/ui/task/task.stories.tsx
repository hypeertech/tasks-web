import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Task } from './task';

export default {
  title: 'Task',
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Buy milk',
  project: {
    id: '0',
    name: 'Inbox',
  },
};
