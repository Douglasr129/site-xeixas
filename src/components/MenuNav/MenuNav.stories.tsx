import type { Meta, StoryObj } from '@storybook/react';
import Links from './mock';
import { MenuNav } from '.';

const meta: Meta<typeof MenuNav> = {
	title: 'Example/MenuNav',
	component: MenuNav,
	tags: ['autodocs'],
	args: {
		Listlinks: Links,
	},
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
};

export default meta;
type Story = StoryObj<typeof MenuNav>;

export const Light: Story = {
	args: {
		Listlinks: Links,
	},
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
};
export const Dark: Story = {
	args: {
		Listlinks: Links,
	},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
};
