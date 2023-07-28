import * as Styled from './MenuNav.style';
import { Links, LinksProps } from '../MenuLinks';

interface MenuNavProps {
	/**Lista de endereços que ira compor o menu*/
	Listlinks?: LinksProps[];
	/**Comportamento do componente em modo noite*/
	darkMode?: boolean;
}
/**Menu de navegação do site */
export const MenuNav = ({
	Listlinks = [],
	darkMode = false,
	...props
}: MenuNavProps) => {
	return (
		<Styled.Container $darkMode={darkMode}>
			<Styled.Ul>
				{Listlinks.map((reLink) => {
					return (
						<Styled.Li key={reLink.link}>
							<Links
								key={reLink.link}
								{...reLink}
								{...props}
								darkMode={!darkMode}
							/>
						</Styled.Li>
					);
				})}
			</Styled.Ul>
		</Styled.Container>
	);
};
