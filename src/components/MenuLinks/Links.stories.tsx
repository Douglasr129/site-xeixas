import type { Meta, StoryObj } from '@storybook/react';
import { Links } from '.';

const meta: Meta<typeof Links> = {
	title: 'Example/Link',
	component: Links,
	tags: ['autodocs'],
	args: {
		children: 'MenuLink',
		link: 'https://www.google.com.br/',
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
type Story = StoryObj<typeof Links>;

export const Light: Story = {
	args: {
		link: 'https://www.google.com.br/',
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
		link: 'https://www.google.com.br/',
		children: 'Teste',
		darkMode: true,
	},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
};
