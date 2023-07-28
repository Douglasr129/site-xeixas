import { ReactNode } from 'react';
import * as Styled from './Links.style';

export interface LinksProps {
	/**Variavel de texto para passar para o href*/
	link: string;
	/**Variavel de boleana para identificar se ira abrir o linke
	 *  em uma página nova ou na mesma.*/
	newTab?: boolean;
	/**Componente filho que ira compor o componente.*/
	children: ReactNode;
	/**Componente para ajuste da tela em modo noturno.*/
	darkMode?: boolean;
}
/**Componente que ira compor o menu nav do site*/
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
