import { Dropdown } from './Dropdown';
import { Story, ComponentMeta } from '@storybook/react';

export default {
  component: Dropdown,
  argTypes: {
    onSelected: { action: 'clicked' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: Story = (args) => <Dropdown {...args} />;

const items = [
  { id: 'ja', value: '日本語' },
  { id: 'en', value: 'English' },
];

export const Default = Template.bind({});
Default.args = {
  selectedId: 'ja',
  items,
};
