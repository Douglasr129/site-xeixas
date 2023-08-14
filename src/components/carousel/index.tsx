/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode, useState } from 'react';
import * as Styled from './carousel.styles';
import { Section } from '../Section';
import { ArrowLeft } from '@styled-icons/material-outlined/ArrowLeft';
import { ArrowRight } from '@styled-icons/material-outlined/ArrowRight';

interface carouselProps {
	children: ReactNode[];
	sectionId: string;
}
const itemsPerPage = 1; // Número de itens por página
export const carousel = ({ children = [], sectionId }: carouselProps) => {
	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = children.slice(indexOfFirstItem, indexOfLastItem);

	const totalPages = Math.ceil(children.length / itemsPerPage);

	const handlePageChange = (pageNumber: number) => {
		if (pageNumber > totalPages) {
			pageNumber = 1;
		}
		setCurrentPage(pageNumber);
	};
	const handlePrevius = (pageNumber: number) => {
		if (pageNumber < 1) {
			pageNumber = totalPages;
		}
		console.log(
			'Pagina = ' + pageNumber,
			'Primeira = ' + indexOfFirstItem,
			'Ultima = ' + indexOfLastItem,
			'Pagina corrente = ' + currentPage,
		);
		setCurrentPage(pageNumber);
	};
	return (
		<Section sectionId={sectionId}>
			<Styled.Container>
				<Styled.sideBar onClick={() => handlePrevius(currentPage - 1)}>
					<ArrowLeft />
				</Styled.sideBar>
				<Styled.content>
					{currentItems.map((item, index) => (
						<div key={index}>{item}</div>
					))}

					<Styled.indexBar>
						{Array.from({ length: totalPages }, (_, index) => {
							return (
								<Styled.Bar
									key={index}
									$active={index + 1 == currentPage ? true : false}
									onClick={() => handlePageChange(index + 1)}
								></Styled.Bar>
							);
						})}
					</Styled.indexBar>
				</Styled.content>
				<Styled.sideBar onClick={() => handlePageChange(currentPage + 1)}>
					<ArrowRight />
				</Styled.sideBar>
			</Styled.Container>
		</Section>
	);
};
