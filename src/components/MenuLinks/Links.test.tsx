import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { Links } from '.';
import React from 'react';

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
	it('should render in dark mode', () => {
		renderTheme(
			<Links link="http://localhost" darkMode={true}>
				Children
			</Links>,
		);

		const linkElement = screen.getByText('Children');
		expect(linkElement).toHaveAttribute('data-dark', 'true');

		const computedStyle = window.getComputedStyle(linkElement);
		const color = computedStyle.getPropertyValue('color');

		console.log('computedStyle:', computedStyle);
		console.log('color:', color);

		expect(color).toBe(theme.colors.white);
	});
	/* 	it('should render in dark mode', () => {
		const { container } = renderTheme(
			<Links link="http://localhost" darkMode={true}>
				Children
			</Links>,
		);
		console.log('Style:', container.firstChild);
		expect(container.firstChild).toHaveStyle({ color: theme.colors.white });
	}); */
});
