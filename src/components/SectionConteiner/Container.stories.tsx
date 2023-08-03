import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '.';

const meta: Meta<typeof Container> = {
	title: 'Example/Container',
	component: Container,
	tags: ['autodocs'],
	args: {
		children: 'Container',
	},
	argTypes: {
		children: { type: 'string' },
	},
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Primary: Story = {
	args: {
		children: (
			<div>
				<h1>SectionContainer</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
					doloribus debitis minima nam beatae alias eius, mollitia asperiores
					animi dolorem esse, aperiam nesciunt praesentium. Labore vel optio
					quaerat aspernatur expedita!
				</p>
			</div>
		),
	},
};
