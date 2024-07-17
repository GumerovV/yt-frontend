'use client'
import { FC } from 'react'
import Menu from './menu/Menu'
import { MenuData } from './menu/menu.data'

import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { api } from '../../../store/api/api'
import { useAuth } from '../../../hooks/useAuth'

const Sidebar: FC = () => {
	const { user } = useAuth()
	const { data: profile } = api.useGetProfileQuery(null, { skip: !user })

	return (
		<aside className={styles.sidebar}>
			<Link href='/' legacyBehavior>
				<a className={styles.logo}>YouTube 2.0</a>
			</Link>

			<Menu title={'Меню'} menuItems={MenuData} />
			{!!profile?.subscriptions?.length && (
				<Menu
					title={'Мои подписки'}
					menuItems={profile.subscriptions.map(({ toUser }) => ({
						icon: !toUser.avatarPath ? 'FaUserCircle' : '',
						image:
							toUser.avatarPath &&
							`http://localhost:4000/${toUser?.avatarPath}`,
						title: toUser?.name || toUser?.email,
						link: `/c/${toUser.id}`,
					}))}
				/>
			)}

			<div className={styles.copy}>© 2024 YouTube 2.0 LLC</div>
		</aside>
	)
}

export default Sidebar
