import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './text-field';

export default {
  title: 'TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => (
  <TextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
