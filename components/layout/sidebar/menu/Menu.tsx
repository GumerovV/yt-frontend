import { FC } from 'react'
import { IMenuItem } from './menu.inteface'
import MenuItem from './MenuItem'

import styles from './Menu.module.scss'
import Line from '../../../ui/Line'

interface IMenu {
	title: string
	menuItems: IMenuItem[]
}

const Menu: FC<IMenu> = ({ title, menuItems }) => {
	return (
		<nav className={styles.menu_wrapper}>
			<h3>{title}</h3>
			<ul>
				{menuItems.map(item => (
					<MenuItem item={item} key={item.link} />
				))}
			</ul>

			<Line />
		</nav>
	)
}

export default Menu
