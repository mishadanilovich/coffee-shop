import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const CubeSlider = styled(Swiper)`
	.swiper-pagination-bullet {
		opacity: 1;
		background: ${({ theme }) => theme.palette.lightGray};
	}
	.swiper-pagination-bullet-active {
		background: ${({ theme }) => theme.palette.beige};
	}
`;
