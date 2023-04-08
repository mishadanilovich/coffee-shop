import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Title, TitleType } from '@/components/ui';
import { getYoutubeId } from '@/components/utils';

import { LessonCardProps } from './LessonCard.interface';
import * as Styled from './LessonCard.styled';

export const LessonCard = ({ data }: LessonCardProps) => {
	const { title, description, lessonUrl } = data;
	const youtubeId = getYoutubeId(lessonUrl);

	return (
		<Styled.Lesson>
			<Title content={title} type={TitleType.h3} />
			<Styled.Description>{description}</Styled.Description>
			{youtubeId && <LiteYouTubeEmbed id={youtubeId} title="" />}
		</Styled.Lesson>
	);
};
