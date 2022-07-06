import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { LinkItem } from './link-item';

export default {
  title: 'Menu - LinkItem',
  component: LinkItem,
  decorators: [withRouter],
} as ComponentMeta<typeof LinkItem>;

const Template: ComponentStory<typeof LinkItem> = args => (
  <LinkItem {...args}>Menu link</LinkItem>
);

export const Default = Template.bind({});

Default.args = {
  to: '/',
};
