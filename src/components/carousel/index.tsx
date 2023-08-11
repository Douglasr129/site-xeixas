import { ReactNode } from 'react';
import * as Styled from './carousel.styles';
import { Section } from '../Section';

interface carouselProps {
	children: ReactNode[];
	sectionId: string;
}
export const carousel = ({ children = [], sectionId }: carouselProps) => {
	return (
		<Section sectionId={sectionId}>
			<Styled.Container>
				<Styled.previous>{'<'}</Styled.previous>
				<Styled.content>
					{children[0]}
					<Styled.indexBar>{'...'}</Styled.indexBar>
				</Styled.content>
				<Styled.next>{'>'}</Styled.next>
			</Styled.Container>
		</Section>
	);
};
