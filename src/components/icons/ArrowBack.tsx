import { SVGProps } from 'react';

export const ArrowBack = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 96 960 960"
		height="24px"
		width="24px"
		fill="currentColor"
		{...props}
	>
		<path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z" />
	</svg>
);
