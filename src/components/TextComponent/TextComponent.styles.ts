import styled from 'styled-components';

type StyleProps = {
	$darkMode?: boolean; // Use 'darkMode' como propriedade CSS
};
export const Container = styled.div<StyleProps>`
	color:${(props) =>
		props.$darkMode ? props.theme.colors.white : props.theme.colors.dark}
`;
