import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Section } from './section';

export default {
  title: 'Menu - Section',
  component: Section,
  decorators: [withRouter],
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = args => (
  <Section {...args}>Menu link</Section>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Navigation',
};
