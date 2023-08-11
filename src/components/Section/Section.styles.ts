import styled, { css } from 'styled-components';

type StyleProps = {
	$background?: string;
};
export const Container = styled.div<StyleProps>`
	${(props) => {
		console.log(props.$background);
		if (props.$background != '') {
			return css`
				background-image: url(${props.$background});
				background-repeat: no-repeat;
 			  background-size: 100vw;
				background-position: center;
			`;
		}
	}}
	margin:0;
	min-height: 100vh;
	display: flex;
	align-items: center;
	padding-left: ${(props) => props.theme.spacings.large};
	padding-right: ${(props) => props.theme.spacings.large};
`;
