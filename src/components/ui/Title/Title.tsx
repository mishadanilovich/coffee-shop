import { createElement } from 'react';
import { TitleTextUse } from '@/interfaces';

import { TitleProps, TitleType } from './Title.interface';
import * as Styled from './Title.styled';

export const Title = ({ content, type = TitleType.h1, className }: TitleProps) => {
	const getContent = () => {
		return (
			<>
				{content.map(({ text, use }, index, arr) => {
					const resText =
						index !== arr.length - 1 ? `${text.toUpperCase()} ` : text.toUpperCase();

					return use === TitleTextUse.main ? (
						<Styled.MainPart key={text}>{resText}</Styled.MainPart>
					) : (
						resText
					);
				})}
			</>
		);
	};

	return createElement(type, { className }, getContent());
};
