import { createElement } from 'react';
import { TitleTextUse } from '@/interfaces';

import { TitleProps, TitleType } from './Title.interface';
import * as Styled from './Title.styled';

export const Title = ({ content, type = TitleType.h1, className }: TitleProps) => {
	const getContent = () => {
		return (
			<>
				{content.map(({ text, use }) =>
					use === TitleTextUse.main ? (
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
