import * as Styled from './TextComponent.styles';

interface TextComponentProps {
	Text: string;
	darkMode?: boolean;
}
export const TextComponent = ({
	Text,
	darkMode = false,
	...props
}: TextComponentProps) => {
	return (
		<Styled.Container
			$darkMode={darkMode}
			dangerouslySetInnerHTML={{ __html: Text }}
			{...props}
		></Styled.Container>
	);
};
