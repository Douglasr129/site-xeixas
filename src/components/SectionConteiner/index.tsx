import { ReactNode } from 'react';
import * as Styled from './Container.style';

interface ContainerProps {
	children: ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
	return <Styled.Container>{children}</Styled.Container>;
};
