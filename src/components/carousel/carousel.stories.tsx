import type { Meta, StoryObj } from '@storybook/react';
import { carousel } from '.';

const meta: Meta<typeof carousel> = {
	title: 'Example/carousel',
	component: carousel,
	tags: ['autodocs'],
	args: {
		children: ['carousel'],
	},
	argTypes: {
		children: { type: 'string' },
	},
};

export default meta;
type Story = StoryObj<typeof carousel>;

export const Primary: Story = {
	args: { children: ['carousel1', 'carousel2', 'carousel3', 'carousel4'] },
};
