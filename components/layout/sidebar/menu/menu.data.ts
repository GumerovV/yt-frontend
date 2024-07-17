import { IMenuItem } from './menu.inteface'

export const MenuData: IMenuItem[] = [
	{
		title: 'Главная',
		link: '/',
		icon: 'HiHome',
	},
	{
		title: 'Тренды',
		link: '/trends',
		icon: 'HiChartBar',
	},
	{
		title: 'Понравишиеся',
		link: '/liked',
		icon: 'BiLike',
	},
	{
		title: 'Мои подписки',
		link: '/subscriptions',
		icon: 'HiCollection',
	},
]
