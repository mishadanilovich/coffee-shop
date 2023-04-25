import { Barista, Blog, Lesson, TitleTextUse } from '@/interfaces';

export const menu = [
	{
		title: 'Espresso',
		image: '/menu-1.png',
		description: '',
		price: 3
	},
	{
		title: 'Doppio',
		image: '/menu-2.png',
		description: 'Double espresso, water.',
		price: 4.3
	},
	{
		title: 'Flat white',
		image: '/menu-3.png',
		description: 'Espresso 2X, milk.',
		price: 5.5
	},
	{
		title: 'Latte',
		image: '/menu-4.png',
		price: 4.6
	},
	{
		title: 'Raf classic',
		image: '/menu-5.png',
		description: 'Espresso, cream, milk, vanilla syrup, nut and chocolate paste.',
		price: 5
	},
	{
		title: 'Raf chocolate-nut',
		image: '/menu-6.png',
		description: 'Espresso, cream, milk, vanilla syrup, nut and chocolate paste.',
		price: 6
	},
	{
		title: 'Mango-Coconut',
		image: '/menu-1.png',
		price: 7.8
	},
	{
		title: 'Ginger-Mint',
		image: '/menu-2.png',
		price: 7.8
	}
];

export const lessons: Lesson[] = [
	{
		id: '1',
		title: [
			{
				text: 'Make a '
			},
			{
				text: 'latte',
				use: TitleTextUse.main
			}
		],
		description:
			'To make latte coffee in a coffee machine, you will need two main ingredients – espresso coffee and milk. The resulting drink must have a thick milk foam. Grated chocolate is traditionally used as a powder. Various experiments are also acceptable, for example, adding caramel, vanilla or berry elements. It will be difficult to make lattes manually, so a coffee machine is used.',
		lessonUrl: 'https://youtu.be/9cXK8fRot2E'
	},
	{
		id: '2',
		title: [
			{
				text: 'Make a '
			},
			{
				text: 'Cappuccino',
				use: TitleTextUse.main
			}
		],
		description:
			'To prepare a drink in a simpler coffee machine, you need to figure out how to use a manual-type cappuccino machine: the device is heated for half an hour, releasing steam from the steam tube in advance. Milk is poured into the container. Its level should be about a centimeter below the spout. When whipping, it will increase in volume. The capuchinator tip is placed on the bottom of the container. Turn on the steam and slowly lift the tip up. Continue this process until the formation of foam. These actions are suitable for a cappuccino machine equipped with a panarello nozzle.',
		lessonUrl: 'https://youtu.be/sWYG3ouMWbA'
	},
	{
		id: '3',
		title: [
			{
				text: 'Make a '
			},
			{
				text: 'Raf',
				use: TitleTextUse.main
			}
		],
		description:
			'In the preparation of classic rafa, coffee beans of several arabica varieties are used. Sometimes about 20% of robusta is added. The degree of roasting of the grains should be average. At the request of the customer, the grains can be fried harder. Fine or medium grain grinding is used to make espresso. The temperature of the finished drink is about 55 degrees. Coffee is prepared no more than a quarter of an hour. Some baristas manage to cook it in just 5 minutes. The standard serving volume is 120-180 ml. The caffeine content in one serving of rafa is 50-68 mg. Therefore, it is not recommended to drink more than 1-2 cups of this drink per day.',
		lessonUrl: 'https://youtu.be/bZVXD0pxHmI'
	}
];

export const baristas: Barista[] = [
	{
		id: '1',
		name: {
			given: 'Alexey',
			family: 'Pavlovich'
		},
		quote: 'A barista is a specialist in making coffee (mainly espresso), who knows how to properly prepare coffee (including using latte art) or drinks based on it and serve them to the visitor. In other words, this is a person who performs the functions of a bartender, but does not work with alcohol and cocktails, but with coffee or coffee-based drinks.',
		avatar: '/avatar-lesha.jpg'
	},
	{
		id: '2',
		name: {
			given: 'Alexey',
			family: 'Pavlovich'
		},
		quote: 'A barista is a specialist in making coffee (mainly espresso), who knows how to properly prepare coffee (including using latte art) or drinks based on it and serve them to the visitor. In other words, this is a person who performs the functions of a bartender, but does not work with alcohol and cocktails, but with coffee or coffee-based drinks.',
		avatar: '/avatar-lesha.jpg'
	},
	{
		id: '3',
		name: {
			given: 'Alexey',
			family: 'Pavlovich'
		},
		quote: 'A barista is a specialist in making coffee (mainly espresso), who knows how to properly prepare coffee (including using latte art) or drinks based on it and serve them to the visitor. In other words, this is a person who performs the functions of a bartender, but does not work with alcohol and cocktails, but with coffee or coffee-based drinks.',
		avatar: '/avatar-lesha.jpg'
	}
];

export const blogs: Blog[] = [
	{
		id: '1',
		title: 'Delicious and refreshing coffee',
		description: 'Made on April 25, 2023',
		img: '/blog-1.jpeg',
		blogUrl: ''
	},
	{
		id: '2',
		title: 'Delicious and refreshing coffee',
		description: 'Made on April 25, 2023',
		img: '/blog-2.jpeg',
		blogUrl: ''
	},
	{
		id: '3',
		title: 'Delicious and refreshing coffee',
		description: 'Made on April 25, 2023',
		img: '/blog-3.jpeg',
		blogUrl: ''
	},
	{
		id: '4',
		title: 'Delicious and refreshing coffee',
		description: 'Made on April 25, 2023',
		img: '/blog-1.jpeg',
		blogUrl: ''
	}
];
