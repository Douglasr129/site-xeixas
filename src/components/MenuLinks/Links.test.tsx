import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Links } from '.';

describe('<Links />', () => {
	it('should render a link', () => {
		renderTheme(<Links link="http://localhost">Children</Links>);
		expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
			'target',
			'_self',
		);
	});

	it('should render a internal link', () => {
		renderTheme(<Links link="/localhost">Children</Links>);
		expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
			'target',
			'_self',
		);
	});

	it('should render open in a new tab', () => {
		renderTheme(
			<Links link="http://localhost" newTab={true}>
				Children
			</Links>,
		);
		expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
			'target',
			'_blank',
		);
	});

	/* 	it('should render open in a new tab', () => {
		const { container } = renderTheme(
			<Links link="http://localhost" newTab={false}>
				Children
			</Links>,
		);
		expect(container.firstChild).toMatchInlineSnapshot();
	}); */
});
