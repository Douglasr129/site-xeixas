import { ReactNode } from 'react';
import * as Styled from './Heading.style';

interface HeadingProps {
	children: ReactNode;
	darkMode?: boolean;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	size?: 'small' | 'medium' | 'big' | 'huge';
	uppercase?: boolean;
}
export const Heading = ({
	children,
	darkMode = false,
	as = 'h1',
	size = 'huge',
	uppercase = false,
}: HeadingProps) => {
	return (
		<Styled.Container
			$darkMode={darkMode}
			as={as}
			$size={size}
			$uppercase={uppercase}
		>
			{children}
		</Styled.Container>
	);
};
