import React, { FC } from 'react'
import styles from './VideoItem.module.scss'
import { formatNumber } from '../../../utils/format-number'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

interface IVideoStatistic {
	views: number
	createdAt?: string
}

dayjs.extend(relativeTime)

const VideoStatistics: FC<IVideoStatistic> = ({ views, createdAt }) => {
	return (
		<div className={styles.number_info}>
			<div className={styles.views}>{formatNumber(views)} views</div>
			{createdAt && (
				<>
					<div className='mx-2'>•</div>
					<div className={styles.date}>
						{dayjs(new Date(createdAt)).fromNow()}
					</div>
				</>
			)}
		</div>
	)
}

export default VideoStatistics
