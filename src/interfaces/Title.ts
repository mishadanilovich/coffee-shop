export enum TitleTextUse {
	main = 'main'
}

interface Content {
	text: string;
	use?: TitleTextUse;
}

export type TitleContent = Content[];
