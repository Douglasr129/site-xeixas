import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Section } from '.';

describe('<Section />', () => {
	it('should render a Section', () => {
		renderTheme(
			<Section sectionId={'1'}>
				<h1>Children</h1>
			</Section>,
		);
		expect(
			screen.getByRole('heading', { name: 'Children' }),
		).toBeInTheDocument();
	});
	it('should render a Backgrout image', () => {
		const { container } = renderTheme(
			<Section background={'https://images/bg.jpg'} sectionId={'1'}>
				Children
			</Section>,
		);
		expect(container.firstChild).toHaveStyleRule(
			'background-image',
			'url(https://images/bg.jpg)',
		);
	});
	it('should render a Backgrout image', () => {
		const { container } = renderTheme(
			<Section background={'https://images/bg.jpg'} sectionId={'1'}>
				Children
			</Section>,
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
