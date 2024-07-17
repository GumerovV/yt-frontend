import React, { FC } from 'react'
import { IUser } from '../../../types/user.interface'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import styles from './UserAvatar.module.scss'
import { FaUserCircle } from 'react-icons/fa'

const UserAvatar: FC<{ user: IUser }> = ({ user }) => {
	return (
		<Link href={`/c/${user.id}`} legacyBehavior>
			<a>
				<span className={styles.avatar}>
					{user.avatarPath ? (
						<Image
							src={
								user?.avatarPath
									? `http://localhost:4000/${user?.avatarPath}`
									: ''
							}
							alt={user.name || user.email}
							width={45}
							height={45}
						/>
					) : (
						<FaUserCircle size={45} />
					)}

					{user.isVerified && (
						<span className={styles.isVerified}>
							<IoIosCheckmarkCircle />
						</span>
					)}
				</span>
			</a>
		</Link>
	)
}

export default UserAvatar
