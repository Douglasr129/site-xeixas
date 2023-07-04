import React, { ReactNode } from 'react';
import * as Styled from './Links.style';

interface LinksProps {
	/**
	 * Url para navegação do menu.
	 */
	link: string;
	/**
	 * Determina se ira abrir em uma guia nova ou na mesma guia.
	 */
	newTab?: boolean;
	/**
	 * Conteudo do componente.
	 */
	children: ReactNode;
	/**
	 * Conteudo do componente.
	 */
	dark?: boolean;
}
/**
 * Componente link padrão para o menu.
 */
export const Links = ({
	link,
	newTab = false,
	dark = false,
	children,
}: LinksProps) => {
	const target = newTab ? '_blank' : '_self';
	return (
		<Styled.Container href={link} target={target} dark={dark}>
			{children}
		</Styled.Container>
	);
};
