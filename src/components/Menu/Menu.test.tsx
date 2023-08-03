//import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';

describe('<Menu />', () => {
	it('should render a Menu', () => {
		renderTheme(<Menu />);
		//expect(screen.getByRole('', { name: 'Children' })).toBe();
	});
});
