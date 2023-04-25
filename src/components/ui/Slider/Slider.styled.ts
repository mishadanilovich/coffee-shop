import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Slider = styled(Swiper)`
	.swiper-pagination-bullet {
		opacity: 1;
		background: ${({ theme }) => theme.palette.lightGray};
	}
	.swiper-pagination-bullet-active {
		background: ${({ theme }) => theme.palette.beige};
	}
	.swiper-pagination {
		position: static;
		margin-top: ${({ theme }) => theme.spacing(2)};
	}
	.swiper-button-next,
	.swiper-button-prev {
		color: ${({ theme }) => theme.palette.beige};
	}
	.swiper-button-next {
		right: 0;
	}
	.swiper-button-prev {
		left: 0;
	}
	.swiper-button-next:after,
	.swiper-button-prev:after {
		font-size: 30px;
	}
`;
