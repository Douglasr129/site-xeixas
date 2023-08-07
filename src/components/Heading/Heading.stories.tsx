import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';

const meta: Meta<typeof Heading> = {
	title: 'Example/Heading',
	component: Heading,
	tags: ['autodocs'],
	args: {
		children: 'Heading',
		darkMode: true,
	},
	argTypes: {
		children: { type: 'string' },
	},
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Light: Story = {
	args: {
		children: 'Teste',
		darkMode: false,
	},
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
};
export const Dark: Story = {
	args: {
		children: 'Teste',
		darkMode: true,
	},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
};
