import { SwiperSlide } from 'swiper/react';
import { BlogCard, Slider, Title, TitleType } from '@/components/ui';
import { theme } from '@/components/theme';

import { BLOGS_TITLE } from './constants';
import { BlogsProps } from './Blogs.interface';
import * as Styled from './Blogs.styled';

export const Blogs = ({ blogs }: BlogsProps) => {
	const getSliders = () => {
		return blogs.map(blog => (
			<SwiperSlide key={blog.id}>
				<BlogCard data={blog} />
			</SwiperSlide>
		));
	};

	return (
		<Styled.Container>
			<Title content={BLOGS_TITLE} type={TitleType.h2} />
			<Styled.SliderContainer>
				<Slider
					grabCursor
					pagination={{
						clickable: true
					}}
					breakpoints={{
						[theme.size.laptop]: {
							slidesPerView: 2,
							spaceBetween: 10
						},
						[theme.size.laptopL]: {
							slidesPerView: 3,
							spaceBetween: 20
						}
					}}
				>
					{getSliders()}
				</Slider>
			</Styled.SliderContainer>
		</Styled.Container>
	);
};
