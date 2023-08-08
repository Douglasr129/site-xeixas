import styled, { css } from 'styled-components';

type StyleProps = {
	$darkMode?: boolean;
	$visible?: boolean;
};
const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;
export const Container = styled.div<StyleProps>`
	position: fixed;
	z-index: 5;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	border-bottom: ${(props) => props.theme.colors.primary};
	background: ${(props) =>
		props.$darkMode ? props.theme.colors.white : props.theme.colors.dark};
	transition: all 300ms ease-in-out;

	@media ${(props) => props.theme.medias.tablet} {
		height: 100vh;
		visibility: hidden;
		opacity: 0;
		${(props) => props.$visible && menuVisible()}
	}
`;

export const Button = styled.button<StyleProps>`
	z-index: 6;
	position: fixed;
	top: 2rem;
	right: 2rem;
	width: 4rem;
	height: 4rem;
	background: ${(props) => {
		return props.$darkMode ? props.theme.colors.white : props.theme.colors.dark;
	}};
	color: ${(props) => {
		return props.$darkMode ? props.theme.colors.dark : props.theme.colors.white;
	}};
	border: none;
	display: none;
	pointer-events: ${(props) => (props.$visible ? 'none' : 'all')};

	@media ${(props) => props.theme.medias.tablet} {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	> svg {
		width: 2.5rem;
		height: 2.5rem;
	}
`;
export const MenuContainer = styled.div<StyleProps>`
	background: ${(props) =>
		props.$darkMode ? props.theme.colors.white : props.theme.colors.dark};
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	@media ${(props) => props.theme.medias.tablet} {
		flex-flow: column wrap;
		justify-content: center;
		align-content: center;
	}
`;
