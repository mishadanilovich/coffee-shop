import { zIndex } from './zIndex';
import { palette } from './palette';
import { commonFont, typography } from './typography';

export const theme = {
	palette,
	typography,
	zIndex,
	commonFont
};

export type Theme = typeof theme;
