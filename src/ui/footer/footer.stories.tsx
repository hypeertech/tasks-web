import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Footer } from './footer';

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {
    date: { control: 'date' },
  },
  decorators: [withRouter],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {};
