import { SVGProps } from 'react';

export const QuotationMark = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="58"
		height="44"
		viewBox="0 0 58 44"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M0 0H22V22H0V0Z" fill="#C7A17A" />
		<path d="M0 22H22L0 44V22Z" fill="#C7A17A" />
		<path d="M36 0H58V22H36V0Z" fill="#C7A17A" />
		<path d="M36 22H58L36 44V22Z" fill="#C7A17A" />
	</svg>
);
