import { ReactNode } from 'react';
import { Container } from '../SectionConteiner';
import * as Styled from './Section.styles';

interface SectionProps {
	children: ReactNode;
	background?: string;
	sectionId: string;
}
export const Section = ({
	children,
	background = '',
	sectionId,
	...props
}: SectionProps) => {
	return (
		<Styled.Container $background={background} id={sectionId} {...props}>
			<Container>{children}</Container>
		</Styled.Container>
	);
};
