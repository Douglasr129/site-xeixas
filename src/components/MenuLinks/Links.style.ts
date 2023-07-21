/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

type StyleProps = {
	darkMode?: boolean; // Use 'darkMode' como propriedade CSS
};

export const Container = styled.a<StyleProps>`
  ${({ theme, darkMode }) => {
		return css`
      padding: 1rem;
      margin: 1rem;
      text-decoration: none;
      color: ${darkMode ? theme.colors.white : theme.colors.dark};
      text-align: center;

      &:hover {
        border-bottom: solid 0.2rem ${theme.colors.secondary};
      }
    `;
	}}
`;
