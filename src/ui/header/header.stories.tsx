import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './header';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    date: { control: 'date' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const CustomTitle = Template.bind({});

CustomTitle.args = {
  title: 'Inbox',
};

export const Day = Template.bind({});

Day.args = {
  date: new Date(),
};
