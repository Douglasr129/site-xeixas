/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from 'styled-components';

type StyleProps = {
	dark: boolean;
};
export const Container = styled.a<StyleProps>`
	${({ theme, dark }) => css`
		padding: 1rem;
		margin: 1rem;
		text-decoration: none;
	`}
`;
