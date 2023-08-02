import type { Meta, StoryObj } from '@storybook/react';
import Links from '../MenuNav/mock';
import { Menu } from '.';

const meta: Meta<typeof Menu> = {
	title: 'Example/Menu',
	component: Menu,
	tags: ['autodocs'],
	args: {
		children: 'Menu',
		links: Links,
		logoData: {
			text: 'Logo',
			link: '#target',
			srcImg: 'static/media/public/assets/images/logo.svg',
		},
	},
	argTypes: {
		children: { type: 'string' },
	},
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
	args: { children: 'Menu' },
};
