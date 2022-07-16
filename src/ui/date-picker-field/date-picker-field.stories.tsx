import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatePickerField } from './date-picker-field';

export default {
  title: 'DatePickerField',
  component: DatePickerField,
} as ComponentMeta<typeof DatePickerField>;

const Template: ComponentStory<typeof DatePickerField> = args => (
  <DatePickerField {...args}>Button</DatePickerField>
);

export const Primary = Template.bind({});
Primary.args = {};
