import { Lesson, TitleTextUse } from '@/interfaces';

export const menu = [
	{
		title: 'Эспрессо',
		image: '/menu-1.png',
		description: '',
		price: 3
	},
	{
		title: 'Доппио',
		image: '/menu-2.png',
		description: 'Двойной эспрессо, вода.',
		price: 4.3
	},
	{
		title: 'Флэт Уайт',
		image: '/menu-3.png',
		description: 'Эспрессо 2Х, молоко.',
		price: 5.5
	},
	{
		title: 'Латте',
		image: '/menu-4.png',
		price: 4.6
	},
	{
		title: 'Раф классический',
		image: '/menu-5.png',
		description: 'Эспрессо, сливки, молоко, сироп ванильный, орехово-шоколадная паста.',
		price: 5
	},
	{
		title: 'Раф шоколадно-ореховый',
		image: '/menu-6.png',
		description: 'Эспрессо, сливки, молоко, сироп ванильный, орехово-шоколадная паста.',
		price: 6
	},
	{
		title: 'Манго-кокос',
		image: '/menu-1.png',
		price: 7.8
	},
	{
		title: 'Имбирь-мята',
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
