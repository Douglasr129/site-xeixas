import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Carousel } from '.';

const sectionsSlid = ['carousel1', 'carousel2', 'carousel3', 'carousel4'];
describe('<carousel />', () => {
	it('should render a carousel', async () => {
		renderTheme(<Carousel sectionId="1">{sectionsSlid}</Carousel>);
		const previousButton = screen.getByTestId('btnPrevius');
		fireEvent.click(previousButton);
		await waitFor(() => {
			expect(screen.getByText('carousel2')).toBeInTheDocument();
		});
	});
});
