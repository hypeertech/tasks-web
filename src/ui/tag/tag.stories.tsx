import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from './tag';

export default {
  title: 'Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Inbox',
};
