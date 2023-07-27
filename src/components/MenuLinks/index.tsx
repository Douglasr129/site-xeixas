import React, { ReactNode } from 'react';
import * as Styled from './Links.style';

export interface LinksProps {
	link: string;
	newTab?: boolean;
	children: ReactNode;
	darkMode?: boolean;
}

export const Links = ({
	link,
	newTab = false,
	darkMode = false,
	children,
	...props
}: LinksProps) => {
	const target = newTab ? '_blank' : '_self';

	return (
		<Styled.Container
			href={link}
			target={target}
			$darkMode={darkMode} // Use data attribute with string value
			{...props}
		>
			{children}
		</Styled.Container>
	);
};
