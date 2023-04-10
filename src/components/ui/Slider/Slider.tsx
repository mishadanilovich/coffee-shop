import { FC, PropsWithChildren } from 'react';
import { Pagination, EffectCube, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

import * as Styled from './Slider.styled';

export const Slider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Styled.Slider
			slidesPerView={1}
			modules={[Pagination, EffectCube, A11y]}
			pagination
			effect={'cube'}
			cubeEffect={{
				shadow: true,
				slideShadows: true,
				shadowOffset: 20,
				shadowScale: 0.94
			}}
			loop
		>
			{children}
		</Styled.Slider>
	);
};
