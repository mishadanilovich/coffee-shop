import { css } from 'styled-components';
import { StyledCSS } from '../types.interface';

export const typography: { [key: string]: StyledCSS } = {
	'13L': css`
		font-size: 13px;
		font-weight: 300;
		line-height: 1.4;
	`,
	'16L': css`
		font-size: 16px;
		font-weight: 300;
		line-height: 1.4;

		@media ${({ theme }) => theme.device.mobileM} {
			font-size: 15px;
		}
	`,
	'20L': css`
		font-size: 20px;
		font-weight: 300;
		line-height: 1.4;

		@media ${({ theme }) => theme.device.mobileL} {
			font-size: 16px;
		}
	`,
	'16R': css`
		font-size: 16px;
		font-weight: 400;
		line-height: 1.6;

		@media ${({ theme }) => theme.device.mobileM} {
			font-size: 14px;
		}
	`,
	'20R': css`
		font-size: 20px;
		font-weight: 400;
		line-height: 1.6;
	`,
	'25R': css`
		font-size: 25px;
		font-weight: 400;
		line-height: 1.8;
	`,
	'25B': css`
		font-size: 25px;
		font-weight: 700;

		@media ${({ theme }) => theme.device.tablet} {
			font-size: 20px;
		}
	`,
	'40B': css`
		font-size: 40px;
		font-weight: 700;

		@media ${({ theme }) => theme.device.tablet} {
			font-size: 30px;
		}
	`,
	'60B': css`
		font-size: 60px;
		font-weight: 700;

		@media ${({ theme }) => theme.device.tablet} {
			font-size: 50px;
		}

		@media ${({ theme }) => theme.device.mobileL} {
			font-size: 45px;
		}
	`
};
