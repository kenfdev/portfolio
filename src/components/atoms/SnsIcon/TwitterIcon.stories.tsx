import { TwitterIcon } from './TwitterIcon';
import { Story, ComponentMeta } from '@storybook/react';

export default {
  component: TwitterIcon,
} as ComponentMeta<typeof TwitterIcon>;

const Template: Story = (args) => <TwitterIcon {...args} />;

export const Default = Template.bind({});
