import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '.';

const meta: Meta<typeof Logo> = {
	title: 'Example/Logo',
	component: Logo,
	tags: ['autodocs'],
	args: {
		text: 'Logo',
		srcImg: 'static/media/public/assets/images/logo.svg',
		link: 'http://localhost',
	},
	argTypes: {
		text: { type: 'string' },
		srcImg: { type: 'string' },
		link: { type: 'string' },
	},
};
export default meta;
type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
	args: { text: 'Logo' },
};
