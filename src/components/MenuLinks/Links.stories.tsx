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
};

export default meta;
type Story = StoryObj<typeof Links>;

export const Primary: Story = {
	args: { link: 'https://www.google.com.br/', children: 'Teste' },
};
