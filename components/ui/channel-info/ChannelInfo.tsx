import React, { FC } from 'react'
import styles from './ChannelInfo.module.scss'
import { IUser } from '../../../types/user.interface'
import UserAvatar from '../user-avatar/UserAvatar'
import { formatNumber } from '../../../utils/format-number'

const ChannelInfo: FC<{ user: IUser; message?: string }> = ({
	user,
	message,
}) => {
	return (
		<div className={styles.avatar}>
			<UserAvatar user={user} />
			<div>
				<p className={styles.name}>{user?.name || user.email}</p>
				{message ? (
					<p>{message}</p>
				) : (
					<p>{formatNumber(Number(user.subscribersCount))} подписчиков</p>
				)}
			</div>
		</div>
	)
}

export default ChannelInfo
