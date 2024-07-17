import React, { FC } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { videoApi } from '../../../store/api/video.api'
import { api } from '../../../store/api/api'
import styles from './LikeButton.module.scss'
import classNames from 'classnames'
import { RiHeart2Fill } from 'react-icons/ri'

const LikeButton: FC<{ videoId: number }> = ({ videoId }) => {
	const { user } = useAuth()
	const { data: profile } = api.useGetProfileQuery({ skip: !user })
	const [like, { data, isLoading }] = videoApi.useUpdateLikesMutation()

	if (!user) return null

	const isLiked = profile?.liked.some(like => Number(like.video.id) === videoId)

	console.log(isLiked, profile?.liked)
	return (
		<button
			className={classNames(styles.button, { [styles.isLiked]: isLiked })}
			onClick={() => like(videoId).unwrap()}
			disabled={isLoading}
		>
			<RiHeart2Fill />
			{isLiked ? 'Не нравится' : 'Нравится'}
		</button>
	)
}

export default LikeButton
