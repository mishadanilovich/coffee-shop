import React from 'react';
import { LinkProps } from 'next/link';

export enum LinkUse {
	primary = 'primary',
	secondary = 'secondary'
}

export interface StyledLinkProps extends Omit<LinkProps, 'as'> {
	use?: LinkUse;
	children?: React.ReactNode;
}
