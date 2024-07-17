'use client'
import { FC } from 'react'
import { IMenuItem } from './menu.inteface'
import { useAuth } from '../../../../hooks/useAuth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Menu.module.scss'
import { icons } from './icons.data'
import Image from 'next/image'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { user } = useAuth()
	const pathname = usePathname()

	if (item.link === '/my-channel') if (!user) return null

	if (item.link === '/subscriptions') if (!user) return null

	const Icon = icons[item.icon as keyof typeof icons]

	return (
		<li>
			<Link href={item.link} legacyBehavior>
				<a className={pathname === item.link ? styles.active : ''}>
					<span className={item.image ? styles.image : ''}>
						{item.icon && Icon ? (
							<Icon />
						) : (
							<Image
								src={item.image || ''}
								alt={item.title}
								width={30}
								height={30}
							/>
						)}
					</span>
					<b>{item.title}</b>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
