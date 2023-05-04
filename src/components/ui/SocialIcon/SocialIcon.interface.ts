import { FunctionComponent, SVGProps } from 'react';
import { LinkProps } from 'next/link';

export type IconType = FunctionComponent<SVGProps<SVGSVGElement>>;

export interface SocialIconProps extends Pick<LinkProps, 'href'> {
	className?: string;
	type: IconType;
	size?: number;
	color?: string;
}
