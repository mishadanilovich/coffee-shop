import { SVGProps } from 'react';

export const Minus = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		height="24"
		width="24"
		fill="currentColor"
		{...props}
	>
		<path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path>
	</svg>
);
