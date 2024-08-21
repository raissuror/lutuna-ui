import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './tab';

const meta = {
  title: 'Navigation/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    children: "Active Tab",
    disabled: false,
    active: true
  }
};

export const NotActive: Story = {
  args: {
    children: "Not Active Tab",
    disabled: false,
    active: false
  }
};

export const Disabled: Story = {
    args: {
      children: "Disabled Tab",
      active: false,
      disabled: true
    }
  };


