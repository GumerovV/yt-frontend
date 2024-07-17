import React, { FC } from 'react'
import { api } from '../../../store/api/api'
import { useAuth } from '../../../hooks/useAuth'
import styles from './SubscribeButton.module.scss'
import classNames from 'classnames'
import { BsPersonDashFill, BsPersonPlusFill } from 'react-icons/bs'

const SubscribeButton: FC<{ channelId: number }> = ({ channelId }) => {
	const { user } = useAuth()
	const { data: profile } = api.useGetProfileQuery({ skip: !user })
	const [subscribe, { data, isLoading, error }] =
		api.useSubscribeToUserMutation()

	if (!user) return null
	if (user?.id === channelId) return null

	const isSubscribed =
		profile?.subscriptions.some(sub => Number(sub.toUser.id) === channelId) ||
		!!data

	return (
		<button
			className={classNames(styles.button, {
				[styles.isSubscribed]: isSubscribed,
			})}
			onClick={() => subscribe(channelId).unwrap()}
			disabled={isLoading}
		>
			{isSubscribed ? <BsPersonDashFill /> : <BsPersonPlusFill />}
			{isSubscribed ? 'Вы уже подписаны' : 'Подписаться'}
		</button>
	)
}

export default SubscribeButton
