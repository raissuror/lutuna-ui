import type { Meta, StoryObj } from '@storybook/react';
import { TabBar } from './tab-bar';

const meta = {
  title: 'Navigation/Tab Bar',
  component: TabBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      {children:"Tab 1", disabled: false, active: true},
      {children:"Tab 2", disabled: false, active: false},
      {children:"Tab 3", disabled: true, active: false},
    ],
  }
};


