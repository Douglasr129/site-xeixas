import type { Meta, StoryObj } from '@storybook/react';
import { Section } from '.';

const meta: Meta<typeof Section> = {
	title: 'Example/Section',
	component: Section,
	tags: ['autodocs'],
	args: {
		children: 'Section',
	},
	argTypes: {
		children: { type: 'string' },
	},
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Primary: Story = {
	args: { children: 'Section' },
};
