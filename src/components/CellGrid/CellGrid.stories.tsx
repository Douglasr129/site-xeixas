import type { Meta, StoryObj } from '@storybook/react';
import { CellGrid } from '.';

const meta: Meta<typeof CellGrid> = {
	title: 'Example/CellGrid',
	component: CellGrid,
	tags: ['autodocs'],
	args: {
		title: 'Lorem Ipsum',
		subtitle: 'What is Lorem Ipsum?',
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
			an unknown printer took a galley of type and scrambled it to make a type specimen book.
			It has survived not only five centuries, but also the leap into electronic typesetting,
			remaining essentially unchanged. It was popularised in the 1960s with the release of
			Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
			publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	argTypes: {
		title: { type: 'string' },
	},
};

export default meta;
type Story = StoryObj<typeof CellGrid>;

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
