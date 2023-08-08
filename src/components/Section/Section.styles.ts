import styled from 'styled-components';

type StyleProps = {
	$backgroundDefault?: boolean;
};
export const Container = styled.div<StyleProps>`
		min-height: 100vh;
    display: flex;
    align-items: center;
`;
