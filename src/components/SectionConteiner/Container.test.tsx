import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Container } from '.';

describe('<SectionContainer />', () => {
	it('should render content', () => {
		const { container } = renderTheme(
			<Container>
				<h1>Children</h1>
			</Container>,
		);
		expect(screen.getByRole('heading')).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
