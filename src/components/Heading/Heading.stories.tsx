import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';

const meta: Meta<typeof Heading> = {
	title: 'Example/Heading',
	component: Heading,
	tags: ['autodocs'],
	args: {
		children: 'Heading',
	},
	argTypes: {
		children: { type: 'string' },
	},
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
	args: { children: 'Heading' },
};
