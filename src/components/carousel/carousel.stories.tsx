import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '.';

const meta: Meta<typeof Carousel> = {
	title: 'Example/Carousel',
	component: Carousel,
	tags: ['autodocs'],
	args: {
		children: ['Carousel'],
		sectionId: 'adsgadfhadfBV-546546ASDAS',
	},
	argTypes: {
		children: { type: 'string' },
		sectionId: { type: 'string' },
	},
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
	args: { children: ['carousel1', 'carousel2', 'carousel3', 'carousel4'] },
};
