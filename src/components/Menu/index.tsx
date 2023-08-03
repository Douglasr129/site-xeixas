import * as Styled from './Menu.style';
import { MenuNav } from '../MenuNav';
import { Logo, LogoProps } from '../MenuLogo';
import { LinksProps } from '../MenuLinks';
import { Container } from '../SectionConteiner';
import { useState } from 'react';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

interface MenuProps {
	logoData?: LogoProps;
	links?: LinksProps[];
	darkMode?: boolean;
}
export const Menu = ({
	logoData = {
		text: 'Logo',
		link: '#target',
		srcImg: 'static/media/public/assets/images/logo.svg',
	},
	links = [],
	darkMode = false,
	...props
}: MenuProps) => {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<Styled.Button
				$visible={visible}
				$darkMode={darkMode}
				onClick={() => setVisible(true)}
				aria-label="Open/Close menu"
			>
				{visible ? (
					<CloseIcon aria-label="Close menu" />
				) : (
					<MenuIcon aria-label="Open menu" />
				)}
			</Styled.Button>
			<Styled.Container
				$darkMode={darkMode}
				$visible={visible}
				onClick={() => setVisible(false)}
			>
				<Container>
					<Styled.MenuContainer $darkMode={darkMode}>
						<Logo {...logoData} />
						<MenuNav Listlinks={links} darkMode={darkMode} {...props} />
					</Styled.MenuContainer>
				</Container>
			</Styled.Container>
		</>
	);
};
