import React, { FC } from 'react'
import { IVideo } from '../../../../types/video.interface'
import ChannelInfo from '../../../ui/channel-info/ChannelInfo'
import SubscribeButton from '../../../ui/subscribe-button/SubscribeButton'
import LikeButton from '../../../ui/like-button/LikeButton'
import styles from './VideoDetail.module.scss'
import { IoEyeSharp } from 'react-icons/io5'
import { formatNumber } from '../../../../utils/format-number'
import { RiHeart2Fill } from 'react-icons/ri'
import { HiCalendar } from 'react-icons/hi'
import dayjs from 'dayjs'

const VideoDetail: FC<{ video: IVideo }> = ({ video }) => {
	return (
		<div className={styles.detail}>
			<div>
				<ChannelInfo user={video.user} />
				<h1>{video.name}</h1>
				<article>
					{video.description || 'Описание видео отсутствует...'}
				</article>
			</div>
			<div className='pt-2'>
				<div className={styles.actions}>
					<SubscribeButton channelId={Number(video.user.id)} />
					<LikeButton videoId={Number(video.id)} />
				</div>
				<div className={styles.statistics}>
					<div>
						<IoEyeSharp />
						{formatNumber(video.views)}
					</div>
					<div>
						<RiHeart2Fill />
						{formatNumber(video.likesCount)}
					</div>
					<div>
						<HiCalendar />
						{dayjs(new Date(video.createdAt)).fromNow()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoDetail
