import { FC, PropsWithChildren } from 'react';
import { Pagination, A11y } from 'swiper';
import { SwiperProps } from 'swiper/react/swiper-react';

import 'swiper/css';
import 'swiper/css/pagination';

import * as Styled from './Slider.styled';

export const Slider: FC<PropsWithChildren & SwiperProps> = ({ children, ...swiperProps }) => {
	return (
		<Styled.Slider modules={[Pagination, A11y]} pagination {...swiperProps}>
			{children}
		</Styled.Slider>
	);
};
