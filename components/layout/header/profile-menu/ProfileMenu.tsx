import { FC } from 'react'
import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'
import { api } from '../../../../store/api/api'
import styles from './ProfileMenu.module.scss'
import Image from 'next/image'
import { FaUserCircle } from 'react-icons/fa'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import Link from 'next/link'
import { useOutside } from '../../../../hooks/useOutside'

const ProfileMenu: FC = () => {
	const { logout } = useActions()
	const { user } = useAuth()
	const { data, isLoading } = api.useGetProfileQuery(null, { skip: !user })
	const { isShow, setIsShow, ref } = useOutside(false)

	if (isLoading) return null

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{data?.avatarPath ? (
					<Image
						src={
							data?.avatarPath
								? `http://localhost:4000/${data?.avatarPath}`
								: ''
						}
						width={40}
						height={40}
						alt={data?.name}
						priority
					/>
				) : (
					<FaUserCircle size={40} />
				)}
				<span className={styles.name}>{data?.name || data?.email}</span>
				{isShow ? <GoChevronUp size={20} /> : <GoChevronDown size={20} />}
			</button>

			{isShow && (
				<div className={styles['profile-menu']}>
					<ul>
						<li>
							<Link href={`/c/${user?.id}`} legacyBehavior>
								<a>Мой канал</a>
							</Link>
						</li>
						<li>
							<Link href={`/profile/edit`} legacyBehavior>
								<a>Редактировать профиль</a>
							</Link>
						</li>
						<li>
							<Link href={`/studio`} legacyBehavior>
								<a>В студию</a>
							</Link>
						</li>
						<li>
							<a>
								<button onClick={logout}>Выйти</button>
							</a>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default ProfileMenu
