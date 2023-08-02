import { ReactNode } from 'react';
import * as Styled from './Menu.style';
import { MenuNav } from '../MenuNav';
import { Logo, LogoProps } from '../MenuLogo';
import { LinksProps } from '../MenuLinks';

interface MenuProps {
	children: ReactNode;
	logoData: LogoProps;
	links?: LinksProps[];
	darkMode?: boolean;
}
export const Menu = ({
	children,
	logoData,
	links = [],
	darkMode = false,
	...props
}: MenuProps) => {
	return (
		<Styled.Container $darkMode={darkMode}>
			<Logo {...logoData} />
			{children}
			<MenuNav Listlinks={links} darkMode={darkMode} {...props} />
		</Styled.Container>
	);
};
