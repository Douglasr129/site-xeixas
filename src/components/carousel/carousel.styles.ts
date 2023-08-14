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
	margin:0;
`;
export const content = styled.div`
	height: 100vh;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
	padding: ${(props) => props.theme.paddings.small};
`;
export const sideBar = styled.div`
	display:flex;
	color: rgba(0,0,0,0.1);
	cursor: pointer;
	font-size: 4rem;
	width: 5rem;
	align-items: center;
	justify-content: center;
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
`;
export const Bar = styled.div<StyleButtonProps>`
	background-color: ${(props) =>
		props.$active ? props.theme.colors.secondary : 'rgba(0,0,0,0.1)'};
	width: 100%;
	border-radius: 0.1rem;
	cursor: pointer;
	margin-left: 0.4rem;
	margin-right: 0.4rem;
	height: 0.4rem;
	animation: go-back 1s ease-in-out;

	@keyframes go-back {
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0);
  }
}
`;
