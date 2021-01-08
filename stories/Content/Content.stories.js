import React from 'react';

import Content from './Content';

export default {
  title: 'Components/Content',
  component: Content,
};

const Template = (args) => <Content {...args} />;

export const First = Template.bind({});
First.args = {
  content: 'This is the 1st test.',
};

export const Second = Template.bind({});
Second.args = {
  content: 'This is the 2nd test.',
};
