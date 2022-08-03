import { Story, ComponentMeta } from '@storybook/react';
import { Tag } from './Tag';

export default {
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: Story = (args) => <Tag {...args}>This is a tag</Tag>;

export const Default = Template.bind({});
