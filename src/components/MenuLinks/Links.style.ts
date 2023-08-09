/* eslint-disable prettier/prettier */
import styled from 'styled-components';

type StyleProps = {
	$darkMode?: boolean; // Use 'darkMode' como propriedade CSS
};

export const Container = styled.a<StyleProps>`
	padding: ${(props) => props.theme.paddings.xsmall};
	margin: ${(props) => props.theme.spacings.xsmall};
	text-decoration: none;
	color: ${(props) =>
		props.$darkMode ? props.theme.colors.white : props.theme.colors.dark};
	text-align: center;

	&:hover {
		border-bottom: solid 0.2rem ${(props) => props.theme.colors.secondary};
	}
`;
