import type { Meta, StoryObj } from '@storybook/react';
import { TwoColumns } from '.';

const meta: Meta<typeof TwoColumns> = {
	title: 'Example/TwoColumns',
	component: TwoColumns,
	tags: ['autodocs'],
	args: {
		children: 'TwoColumns',
	},
	argTypes: {
		children: { type: 'string' },
	},
};

export default meta;
type Story = StoryObj<typeof TwoColumns>;

export const Primary: Story = {
	args: { children: 'TwoColumns' },
};
