import styled, { css } from 'styled-components';

type StyleProps = {
	$subtitle?: boolean;
};
export const Container = styled.div<StyleProps>`
	${(props) => {
		if (props.$subtitle) {
			return css`
					h2{
						margin-bottom: 0;
					}
					& > h3{
						margin-top: 0;
						margin-left: 5rem;
					}
			`;
		} else {
			return css`
					h2{
						margin: 3.2rem;
					}
			`;
		}
	}}


`;
