import React from 'react';

import SearchInput from './SearchInput';

export default {
  title: 'Components/Search Input',
  component: SearchInput,
};

const Template = (args) => <SearchInput {...args} />;

const doNothing = () => console.log('does nothing');

export const First = Template.bind({});
First.args = {
  placeholder: 'Search users...',
  value: 'something',
  onChange: doNothing,
};

export const Second = Template.bind({});
Second.args = {
  placeholder: 'Search users...',
  value: 'something else',
  onChange: doNothing,
};
