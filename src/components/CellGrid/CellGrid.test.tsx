import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CellGrid } from '.';

describe('<CellGrid />', () => {
	it('should render a title', () => {
		renderTheme(<CellGrid title={'Teste'} />);
		const h1 = screen.getByRole('heading', { name: 'Teste' });
		expect(h1).toBeInTheDocument();
	});
	it('should render a title with margin-bottom undefined', () => {
		renderTheme(<CellGrid title={'Teste'} />);
		expect(screen.getByRole('heading', { name: 'Teste' })).toHaveStyleRule({
			margin: '3.2rem',
		});
	});
	it('should render a subtitle', () => {
		renderTheme(<CellGrid title={'Teste'} subtitle={'SupTeste'} />);
		expect(
			screen.getByRole('heading', { name: 'SupTeste' }),
		).toBeInTheDocument();
	});
	it('should render a title with margin-bottom 0', () => {
		renderTheme(<CellGrid title={'Teste'} subtitle={'SupTeste'} />);
		expect(screen.getByRole('heading', { name: 'Teste' })).toHaveStyleRule({
			'margin-bottom': '0',
		});
		expect(screen.getByRole('heading', { name: 'SupTeste' })).toHaveStyleRule({
			'margin-top': '0',
			'margin-left': '5rem',
		});
	});
	it('should render a text', () => {
		const html = '<h4>Test<h4/>';
		renderTheme(<CellGrid title={'Teste'} subtitle={'SupTeste'} text={html} />);
		expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument();
	});
	it('should rende elemnets HTML', () => {
		const { container } = renderTheme(
			<CellGrid title={'Teste'} subtitle={'SupTeste'} text="Text exemple" />,
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
