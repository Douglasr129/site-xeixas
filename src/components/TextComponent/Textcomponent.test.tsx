import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
	it('should render a TextComponent', () => {
		renderTheme(<TextComponent Text="Children"></TextComponent>);
		expect(screen.getByText('Children')).toBeInTheDocument();
	});
	it('should rende elemnets HTML', () => {
		const html = '<h1>Test<h1/>';
		renderTheme(<TextComponent Text={html}></TextComponent>);
		expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument();
	});
	it('', () => {
		const { container } = renderTheme(
			<TextComponent darkMode={true} Text="Children"></TextComponent>,
		);
		expect(container.firstChild).toHaveStyleRule('color', theme.colors.white);
	});
	it('', () => {
		const { container } = renderTheme(
			<TextComponent darkMode={true} Text="Children"></TextComponent>,
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
