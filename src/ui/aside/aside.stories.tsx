import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Aside } from './aside';
import { ProjectCollectionDocument } from '../../generated/graphql';

export default {
  title: 'Aside',
  component: Aside,
  decorators: [withRouter],
} as ComponentMeta<typeof Aside>;

const Template: ComponentStory<typeof Aside> = args => <Aside {...args} />;

export const Default = Template.bind({});

Default.args = {};
Default.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: ProjectCollectionDocument,
        },
        result: {
          data: {
            projectCollection: [
              {
                id: '0',
                name: 'Inbox',
              },
              {
                id: '1',
                name: 'New life',
              },
            ],
          },
        },
      },
    ],
  },
};
