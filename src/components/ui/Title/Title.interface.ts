export enum TitleTextType {
	main = 'main'
}

export enum TitleType {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3'
}

interface Content {
	text: string;
	type?: TitleTextType;
}

export type TitleContent = Content[];

export interface TitleProps {
	content: TitleContent;
	type: TitleType;
	className?: string;
}
