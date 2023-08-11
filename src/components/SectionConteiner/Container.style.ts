import styled from 'styled-components';

type StyleProps = {
	dark?: boolean;
};
export const Container = styled.div<StyleProps>`
    max-width: 120rem;
    margin: 0 auto;
    padding: 0;
		width: 100%;
`;
