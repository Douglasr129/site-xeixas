import type { Meta, StoryObj } from '@storybook/react';
import { TextComponent } from '.';

const meta: Meta<typeof TextComponent> = {
	title: 'Example/TextComponent',
	component: TextComponent,
	tags: ['autodocs'],
	args: {
		children: 'TextComponent',
	},
	argTypes: {
		children: { type: 'string' },
	},
};

export default meta;
type Story = StoryObj<typeof TextComponent>;

export const Light: Story = {
	args: {
		children: 'TextComponent',
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
		children: 'TextComponent',
		darkMode: true,
	},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
};
