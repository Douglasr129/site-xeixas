import { ReactNode } from 'react';
import { Container } from '../SectionConteiner';
import * as Styled from './Section.styles';

interface SectionProps {
	children: ReactNode;
	backgroundDefault?: boolean;
	sectionId: string;
}
export const Section = ({
	children,
	backgroundDefault = false,
	sectionId,
	...props
}: SectionProps) => {
	return (
		<Styled.Container
			$backgroundDefault={backgroundDefault}
			id={sectionId}
			{...props}
		>
			<Container>{children}</Container>
		</Styled.Container>
	);
};
