import { ReactNode } from 'react';
import * as Styled from './TwoColumns.styles';

interface TwoColumnsProps {
	children: ReactNode;
}
export const TwoColumns = ({ children }: TwoColumnsProps) => {
	return <Styled.Container>{children}</Styled.Container>;
};
