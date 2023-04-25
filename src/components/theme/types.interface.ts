import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export type StyledCSS = FlattenInterpolation<ThemeProps<DefaultTheme>>;
