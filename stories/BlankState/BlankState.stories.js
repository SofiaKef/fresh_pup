import React from 'react';
import { action } from '@storybook/addon-actions';
import BlankState from './BlankState';

export default {
  title: 'Components/Blank State',
  component: BlankState,
};

const Template = (args) => <BlankState {...args} />;

export const Documents = Template.bind({});
Documents.args = {
  icon: { style: 'solid', symbol: 'file-alt' },
  title: "You're plum out of documents, friend!",
  subtitle: 'Add your first document by clicking the button below.',
  action: {
    style: 'success',
    onClick: action('clicked'),
    label: 'Create Your First Document',
  },
};

export const AdminUserSettings = Template.bind({});
AdminUserSettings.args = {
  icon: { style: 'solid', symbol: 'gear' },
  title: 'No user settings here, friend.',
  subtitle: 'Add your first setting by clicking the button below.',
  action: {
    style: 'success',
    onClick: action('clicked'),
    label: 'Create Your First Setting',
  },
};
