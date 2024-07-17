'use client'
import React from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { api } from '../../../store/api/api'
import ChannelInfo from '../../ui/channel-info/ChannelInfo'
import SubscribeButton from '../../ui/subscribe-button/SubscribeButton'
import styles from './Subscriptions.module.scss'

const Subscriptions = () => {
	const { user } = useAuth()
	const { data: profile, isLoading } = api.useGetProfileQuery(null, {
		skip: !user,
	})

	return (
		<div className={styles.wrapper}>
			{profile?.subscriptions &&
				profile.subscriptions.map(sub => (
					<div className={styles.user}>
						<ChannelInfo user={sub.toUser} />
						<div className='text-sm'>
							{!isLoading && (
								<SubscribeButton channelId={Number(sub.toUser.id)} />
							)}
						</div>
					</div>
				))}
		</div>
	)
}

export default Subscriptions
