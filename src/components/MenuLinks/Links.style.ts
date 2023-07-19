/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css, useTheme } from 'styled-components';

type StyleProps = {
	dark: boolean;
};

export const Container = styled.a<StyleProps>`
  ${({ theme, dark }) => {
		return css`
      padding: 1rem;
      margin: 1rem;
      text-decoration: none;
      color: ${dark ? theme.colors.white : theme.colors.dark};
      text-align: center;

			&:hover{
				border-bottom: solid 0.2rem ${theme.colors.secondary};
			}
    `;
	}}
`;
