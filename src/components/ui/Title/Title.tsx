import { createElement } from 'react';
import { TitleProps, TitleTextType } from './Title.interface';

import * as Styled from './Title.styled';

export const Title = ({ content, type, className }: TitleProps) => {
	const getContent = () => {
		return (
			<>
				{content.map(({ text, type }) =>
					type === TitleTextType.main ? (
						<Styled.MainPart key={text}>{text.toUpperCase()}</Styled.MainPart>
					) : (
						text.toUpperCase()
					)
				)}
			</>
		);
	};

	return createElement(type, { className }, getContent());
};
