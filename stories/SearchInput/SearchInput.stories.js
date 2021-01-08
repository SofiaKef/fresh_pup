import React, { useState } from 'react';

import SearchInput from './SearchInput';

export default {
  title: 'Components/Search',
  component: SearchInput,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? '');
  return (
    <SearchInput
      {...args}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
    />
  );
};

export const Search = Template.bind({});
Search.args = {
  placeholder: 'Search...',
};
