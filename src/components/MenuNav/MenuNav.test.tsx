import { screen, within } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';
import { MenuNav } from '.';
import { theme } from '../../styles/theme';

describe('<Links />', () => {
	it('should render a link', () => {
		renderTheme(<MenuNav Listlinks={mock} />);
		expect(screen.getAllByRole('link')).toHaveLength(mock.length);
	});
	it('should render list of links', () => {
		renderTheme(<MenuNav Listlinks={mock} />);
		const list = screen.getByRole('list');
		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(mock.length);
	});
	it('should render list of links', () => {
		renderTheme(<MenuNav />);
		const list = screen.getByRole('list');
		expect(list.childElementCount).toBe(0);
	});
	it('should render links in mobile', () => {
		renderTheme(<MenuNav Listlinks={mock} />);
		const element = screen.getByRole('list');
		expect(element).toHaveStyleRule({
			media: theme.medias.tablet,
		});
	});
	it('should render in dark mode', () => {
		renderTheme(<MenuNav Listlinks={mock} darkMode={true} />);
		const { container } = renderTheme(
			<MenuNav Listlinks={mock} darkMode={true} />,
		);
		expect(container.firstChild).toHaveStyleRule(
			'background',
			theme.colors.white,
		);
	});
	it('should render in dark mode', () => {
		const { container } = renderTheme(
			<MenuNav Listlinks={mock} darkMode={true} />,
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
