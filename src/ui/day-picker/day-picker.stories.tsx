import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DayPicker } from './day-picker';
import type { DaySelectionMode } from 'react-day-picker';

export default {
  title: 'DayPicker',
  component: DayPicker,
  argTypes: {
    selected: {
      control: 'date',
      defaultValue: new Date(),
    },
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range', 'default'] as DaySelectionMode[],
      defaultValue: 'single',
    },
  },
} as ComponentMeta<typeof DayPicker>;

const Template: ComponentStory<typeof DayPicker> = args => (
  <DayPicker {...args} />
);

export const Default = Template.bind({});

Default.args = {};
