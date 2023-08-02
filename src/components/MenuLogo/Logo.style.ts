import styled from 'styled-components';

export const Container = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	font-family: ${(props) => props.theme.fonts.family.secundary};
	font-size: ${(props) => props.theme.fonts.sizes.xlarge};
	color: inherit;
	> img {
		max-height: 3rem;
		filter:drop-shadow(0.2rem 0.2rem 0px #fff);
		margin-left: 2rem;
	}
`;
