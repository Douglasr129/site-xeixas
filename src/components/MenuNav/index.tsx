import React, { ReactNode } from 'react';
import * as Styled from './MenuNav.style';
import { Links, LinksProps } from '../MenuLinks';

interface MenuNavProps {
	Listlinks?: LinksProps[];
	newTab?: boolean;
	children: ReactNode;
	darkMode?: boolean;
}

export const MenuNav = ({ Listlinks = [], ...props }: MenuNavProps) => {
	return (
		<Styled.Container>
			{Listlinks.map((reLink) => (
				<Links key={reLink.link} {...reLink} {...props} />
			))}
		</Styled.Container>
	);
};
