import { ReactNode } from 'react';
import * as Styled from './CellGrid.styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

interface CellGridProps {
	title: ReactNode;
	subtitle?: ReactNode;
	text?: string;
	darkMode?: boolean;
}
export const CellGrid = ({
	title,
	subtitle = '',
	text = '',
	darkMode = false,
	...props
}: CellGridProps) => {
	const sub = subtitle ? true : false;
	return (
		<Styled.Container $subtitle={sub} {...props}>
			<Heading darkMode={darkMode} size="medium" as="h2">
				{title}
			</Heading>
			{!!subtitle && (
				<Heading darkMode={darkMode} size="xsmall" as="h3">
					{subtitle}
				</Heading>
			)}

			<TextComponent darkMode={darkMode} Text={text} />
		</Styled.Container>
	);
};
