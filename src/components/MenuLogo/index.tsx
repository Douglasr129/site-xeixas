import Image from 'next/image';
import * as Styled from './Logo.style';

interface LogoProps {
	srcImg?: string;
	text: string;
	link: string;
}
export const Logo = ({ srcImg = '', text, link }: LogoProps) => {
	return (
		<Styled.Container href={link}>
			{!!srcImg && <Image src={srcImg} alt={text} width={160} height={160} />}
			{!srcImg && text}
		</Styled.Container>
	);
};
