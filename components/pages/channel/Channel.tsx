'use client'
import React, { FC } from 'react'
import { api } from '../../../store/api/api'
import Catalog from '../home/catalog/Catalog'
import styles from './Channel.module.scss'
import UserAvatar from '../../ui/user-avatar/UserAvatar'
import { formatNumber } from '../../../utils/format-number'
import SubscribeButton from '../../ui/subscribe-button/SubscribeButton'

const Channel: FC<{ id: number }> = ({ id }) => {
	const { data: channel, isLoading, error } = api.useGetUserByIdQuery(id)

	return (
		<>
			{channel && (
				<div className={styles.profile}>
					<div className={styles.avatar}>
						<UserAvatar user={channel} />
						<div>
							<p className={styles.name}>{channel?.name || channel?.email}</p>
							{channel?.subscribersCount != undefined && (
								<p>{formatNumber(channel.subscribersCount)} подписчиков</p>
							)}
						</div>
						{
							<div className='ml-4'>
								<SubscribeButton channelId={Number(channel.id)} />
							</div>
						}
					</div>

					<article>
						{channel?.description || 'Подробная информация отсутствует'}
					</article>
				</div>
			)}
			<Catalog
				videos={channel?.videos || []}
				isLoading={isLoading}
				title={'Видео'}
			/>
		</>
	)
}

export default Channel
