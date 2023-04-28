import { LessonCard, Title, TitleType } from '@/components/ui';
import { ANCHORS } from '@/components/constants';

import { LessonsProps } from './Lessons.interface';
import { LESSONS_TITLE } from './constants';
import * as Styled from './Lessons.styled';

export const Lessons = ({ lessons }: LessonsProps) => {
	const getContent = () => {
		return lessons.map(({ id, ...lesson }) => <LessonCard key={id} data={lesson} />);
	};

	return (
		<Styled.Container id={ANCHORS.LESSONS}>
			<Title type={TitleType.h2} content={LESSONS_TITLE} />
			<Styled.Content>{getContent()}</Styled.Content>
		</Styled.Container>
	);
};
