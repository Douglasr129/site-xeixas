import styled from 'styled-components';

type StyleButtonProps = {
	$active?: boolean;
};
export const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	height: 100vh;
	width: 100%;
	align-items: center;
	margin:0;	@media ${(props) => props.theme.medias.tablet} {
		height: 100vh;
		padding:0;
		margin:0;
	}
`;
export const content = styled.div`
	height: 100vh;
	display: flex;
	width: 100%;
	margin-left: -5rem;
	margin-right: -5rem;
	flex-direction: column;
	justify-content: space-between;
	z-index: 0;
	padding: ${(props) => props.theme.paddings.small};
	margin:0;	@media ${(props) => props.theme.medias.tablet} {
		padding:0;
		margin-left: -5rem;
		margin-right: -5rem;
		margin-top:0;
		margin-bottom:0;
	}
`;
export const sideBar = styled.div`
	display:flex;
	color: rgba(0,0,0,0.5);
	height: 5rem;
	border-radius: 2.5rem;
	cursor: pointer;
	font-size: 4rem;
	width: 5rem;
	align-items: center;
	justify-content: center;
	transition: 0.5s;
	z-index: 10;
	&:hover {
		background-color: rgba(0,0,0,0.1);
		color: white;
	}

`;
export const indexBar = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: flex-end;
`;
export const Bar = styled.div<StyleButtonProps>`
	background-color: ${(props) =>
		props.$active ? props.theme.colors.secondary : 'rgba(0,0,0,0.1)'};
	width: 100%;
	border-radius: 0.2rem;
	cursor: pointer;
	margin-left: 0.4rem;
	margin-right: 0.4rem;
	height: ${(props) => (props.$active ? '0.6rem' : '0.4rem')};
	transition: 0.5s;
  &:hover{
		height: 0.6rem;
		background-color:${(props) => props.theme.colors.secondary};
	}

`;
