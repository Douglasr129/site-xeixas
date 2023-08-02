import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Logo } from '.';

describe('<Logo />', () => {
	it('should render a Logo with link', () => {
		renderTheme(
			<Logo
				srcImg="static/media/public/assets/images/logo.svg"
				text="logo"
				link="/logo"
			/>,
		);
		expect(screen.getByRole('link')).toHaveAttribute('href', '/logo');
	});
	it('should render a Logo with image', () => {
		renderTheme(
			<Logo
				srcImg="static/media/public/assets/images/logo.svg"
				text="logo"
				link="/logo"
			/>,
		);
		expect(screen.getByRole('img')).toHaveAttribute(
			'src',
			'static/media/public/assets/images/logo.svg',
		);
		expect(screen.getByRole('img')).toHaveAttribute('alt', 'logo');
	});
	it('should render a Logo with Text', () => {
		renderTheme(<Logo text="logo" link="/logo" />);
		expect(screen.getByRole('link')).toHaveTextContent('logo');
	});
	it('should render in dark mode', () => {
		const { container } = renderTheme(
			<Logo
				srcImg="static/media/public/assets/images/logo.svg"
				text="logo"
				link="/logo"
			/>,
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
