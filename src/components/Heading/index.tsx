import { ReactNode } from 'react';
import * as Styled from './Heading.style';

interface HeadingProps {
	children: ReactNode;
}
export const Heading = ({ children }: HeadingProps) => {
	return <Styled.Container>{children}</Styled.Container>;
};
