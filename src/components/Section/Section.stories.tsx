import type { Meta, StoryObj } from '@storybook/react';
import { Section } from '.';
import cover from '../../../public/assets/images/cover.jpg';

const meta: Meta<typeof Section> = {
	title: 'Example/Section',
	component: Section,
	tags: ['autodocs'],
	args: {
		children: 'Section',
		background: cover.src,
	},
	argTypes: {
		children: { type: 'string' },
	},
};

export default meta;
type Story = StoryObj<typeof Section>;

export const WithBackground: Story = {
	args: { children: 'Section' },
};
export const WithoutBackground: Story = {
	args: { children: 'Section', background: '' },
};
