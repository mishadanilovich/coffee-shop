import { FunctionComponent, SVGProps } from 'react';

export type IconType = FunctionComponent<SVGProps<SVGSVGElement>>;

export interface SocialIconProps {
	className?: string;

	socialLink?: string;
	type: IconType;
	size?: number;
	color?: string;
	hasBorder?: boolean;
}
