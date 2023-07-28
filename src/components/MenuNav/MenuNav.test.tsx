//import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';
import { MenuNav } from '.';
//4import { theme } from '../../styles/theme';

describe('<Links />', () => {
	it('should render a link', () => {
		const { container } = renderTheme(<MenuNav Listlinks={mock} />);
		console.log(container.firstChild);
		/* 		expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
			'target',
			'_self',
		); */
	});
	/* 	it('should render in dark mode', () => {
		renderTheme(
			<Links darkMode={true} link="http://localhost">
				Children
			</Links>,
		);
		const textComponent = screen.getByText('Children');
		expect(textComponent).toHaveStyleRule('color', theme.colors.white);
	});
	it('should have snepshot', () => {
		renderTheme(
			<Links darkMode={true} link="http://localhost">
				Children
			</Links>,
		);
		const textComponent = screen.getByText('Children');
		expect(textComponent).toMatchSnapshot();
	}); */
});
