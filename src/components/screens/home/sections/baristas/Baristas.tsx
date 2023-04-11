import { SwiperSlide } from 'swiper/react';
import { BaristaCard, Slider, Title, TitleType } from '@/components/ui';

import { BARISTAS_TITLE } from './constants';
import { BaristasProps } from './Baristas.interface';
import * as Styled from './Baristas.styled';

export const Baristas = ({ baristas }: BaristasProps) => {
	const getSliders = () => {
		return baristas.map(barista => (
			<SwiperSlide key={barista.id}>
				<BaristaCard data={barista} />
			</SwiperSlide>
		));
	};

	return (
		<Styled.Container>
			<Title type={TitleType.h2} content={BARISTAS_TITLE} />
			<Styled.Content>
				<Slider>{getSliders()}</Slider>
			</Styled.Content>
		</Styled.Container>
	);
};
