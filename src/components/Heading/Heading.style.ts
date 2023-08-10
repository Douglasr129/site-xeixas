/* eslint-disable indent */
import styled, { css } from 'styled-components';

type StyleProps = {
	$darkMode?: boolean;
	$size?: string;
	$uppercase?: boolean;
};

export const Container = styled.h1<StyleProps>`
	color: ${(props) =>
		props.$darkMode ? props.theme.colors.white : props.theme.colors.dark};
	${(props) => {
		switch (props.$size) {
			case 'huge': {
				return css`
					font-size: ${props.theme.fonts.sizes.xhuge};
					@media ${props.theme.medias.tablet} {
    				font-size: ${props.theme.fonts.sizes.xlarge};
 					};
				`;
			}
			case 'big': {
				return css`
				font-size: ${props.theme.fonts.sizes.xlarge};
			`;
			}
			case 'medium': {
				return css`
				font-size: ${props.theme.fonts.sizes.large};
			`;
			}
			case 'small': {
				return css`
				font-size: ${props.theme.fonts.sizes.medium};
			`;
			}
			case 'xsmall': {
				return css`
				font-size: ${props.theme.fonts.sizes.small};
			`;
			}
		}
	}};
	text-transform: ${(props) => (props.$uppercase ? 'uppercase' : 'none')}
`;
