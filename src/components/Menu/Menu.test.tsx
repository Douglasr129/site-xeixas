import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import mock from '../MenuNav/mock';
import { theme } from '../../styles/theme';

const logoData = {
	text: 'Logo',
	srcImg: 'static/media/public/assets/images/logo.svg',
	link: 'http://localhost',
};
describe('<Menu />', () => {
	it('should render logo and Main Menu Nav', () => {
		renderTheme(<Menu links={mock} logoData={logoData} />);
		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});
	it('should render menu mobile and button for open and close the menu', () => {
		renderTheme(<Menu links={mock} logoData={logoData} />);

		const button = screen.getByLabelText('Open/Close menu');
		const menuContainer = button.nextSibling as HTMLElement;

		expect(button).toHaveStyleRule('display', 'none');
		expect(button).toHaveStyleRule({
			media: theme.medias.tablet,
			display: 'flex',
		});

		expect(menuContainer).toHaveStyleRule({
			media: theme.medias.tablet,
			opacity: '0',
		});
		expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

		fireEvent.click(button);
		expect(menuContainer).toHaveStyleRule({
			media: theme.medias.tablet,
			opacity: '1',
		});
		expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

		fireEvent.click(menuContainer);
		expect(menuContainer).toHaveStyleRule({
			media: theme.medias.tablet,
			opacity: '0',
		});
		expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
	});
	it('should render in dark model', () => {
		const { container } = renderTheme(
			<Menu links={mock} logoData={logoData} darkMode={true} />,
		);
		expect(container.firstChild).toHaveStyleRule(
			'background',
			theme.colors.white,
		);
	});
	it('should render without links', () => {
		renderTheme(<Menu logoData={logoData} />);
		const ul = screen.getByRole('navigation').firstChild;
		expect(ul?.firstChild).not.toBeInTheDocument();
	});
	it('should render without logo image', () => {
		const { container } = renderTheme(<Menu />);
		expect(container.firstChild).toBeInTheDocument();
	});
	it('should render logo and Main Menu Nav', () => {
		const { container } = renderTheme(
			<Menu links={mock} logoData={logoData} />,
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
