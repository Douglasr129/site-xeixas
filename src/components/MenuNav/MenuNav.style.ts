/* eslint-disable prettier/prettier */
import styled from 'styled-components';

type StyleProps = {
	$darkMode?: boolean; // Use 'darkMode' como propriedade CSS
};

export const Container = styled.div<StyleProps>`
	background: ${(props) =>
		props.$darkMode ? props.theme.colors.white : props.theme.colors.dark};
	margin: 0;
`;
export const Ul = styled.ul<StyleProps>`
	list-style: none;
	display: flex;
	flex-flow: row wrap;
	margin: 0;
	justify-content: center;
	padding: ${(props) => props.theme.paddings.xsmall};
	@media ${(props) => props.theme.medias.tablet} {
		flex-flow: column wrap;
		justify-content: space-evenly;
		align-content: center;
	}
`;
export const Li = styled.li<StyleProps>`
	padding:${(props) => props.theme.paddings.small};
`;
