import styled from 'styled-components';

type StyleProps = {
	dark?: boolean;
};
export const Container = styled.div<StyleProps>`
	background-color: yellow;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	height: 100vh;
	width: 100%;
	margin:0;
`;
export const content = styled.div<StyleProps>`
	background-color: blue;
	height: 100vh;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
	padding: 1.5rem;
`;
export const previous = styled.div<StyleProps>`
	background-color: rgba(0,0,0,0.3);
	display:flex;
	color: white;
	font-size: 4rem;
	width: 5rem;
	align-items: center;
	justify-content: center;
`;
export const next = styled.div<StyleProps>`
	background-color: rgba(0,0,0,0.3);
	display:flex;
	color: white;
	font-size: 4rem;
	width: 5rem;
	align-items: center;
	justify-content: center;
`;
export const indexBar = styled.div<StyleProps>`
	background-color: rgba(0,0,0,0.3);
	width: 100%;
`;
export const Bar = styled.div<StyleProps>`
	background-color: white;
	width: 100%;
	height: 1.5rem;
`;
