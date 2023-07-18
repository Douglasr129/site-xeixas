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
      color: ${dark ? theme.colors.white : '#000'};
      text-align: center;
    `;
	}}
`;
