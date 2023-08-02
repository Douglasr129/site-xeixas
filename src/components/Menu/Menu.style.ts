import styled from 'styled-components';
type StyleProps = {
	$darkMode?: boolean;
};

export const Container = styled.div<StyleProps>`
	background: ${(props) =>
		props.$darkMode ? props.theme.colors.white : props.theme.colors.dark};
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`;
