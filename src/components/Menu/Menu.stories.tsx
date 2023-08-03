import type { Meta, StoryObj } from '@storybook/react';
import Links from '../MenuNav/mock';
import { Menu } from '.';

const meta: Meta<typeof Menu> = {
	title: 'Example/Menu',
	component: Menu,
	tags: ['autodocs'],
	args: {
		links: Links,
		logoData: {
			text: 'Logo',
			link: '#target',
			srcImg: 'static/media/public/assets/images/logo.svg',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Light: Story = {
	args: {
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
		darkMode: true,
	},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
};
