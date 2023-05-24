import { createElement } from 'react';

import { PRIMARY_TITLE_SEPARATOR, PRIMARY_TITLE_SYMBOL } from './constants';
import { TitleProps, TitleType } from './Title.interface';

import * as Styled from './Title.styled';

export const Title = ({ content, type = TitleType.h1, className }: TitleProps) => {
	const getContent = () => {
		return (
			<>
				{content
					.trim()
					.toUpperCase()
					.split(PRIMARY_TITLE_SEPARATOR)
					.map(text => {
						if (text.startsWith(PRIMARY_TITLE_SYMBOL)) {
							return (
								<Styled.MainPart key={text}>
									{text.replace(PRIMARY_TITLE_SYMBOL, '')}
								</Styled.MainPart>
							);
						}
						return text;
					})}
			</>
		);
	};

	return createElement(type, { className }, getContent());
};
