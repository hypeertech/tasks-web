import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TaskTitle } from './task-title';

export default {
  title: 'TaskTitle',
  component: TaskTitle,
} as ComponentMeta<typeof TaskTitle>;

const Template: ComponentStory<typeof TaskTitle> = args => (
  <TaskTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 'Buy milk',
};
