export enum TitleType {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4'
}

export interface TitleProps {
	content: string;
	type?: TitleType;
	className?: string;
}
