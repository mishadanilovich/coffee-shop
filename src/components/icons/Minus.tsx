import { SVGProps } from 'react';

export const Minus = (props: SVGProps<SVGSVGElement>) => (
	<svg
		preserveAspectRatio="xMidYMid meet"
		viewBox="0 0 24 24"
		width="24"
		height="24"
		fill="currentColor"
		{...props}
	>
		<path d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75zm0-1.5c-5.11 0-9.25-4.14-9.25-9.25S6.89 2.75 12 2.75s9.25 4.14 9.25 9.25-4.14 9.25-9.25 9.25z"></path>
		<path d="M7.58 12.75h9.266c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H7.58c-.414 0-.75.336-.75.75s.336.75.75.75z"></path>
	</svg>
);
