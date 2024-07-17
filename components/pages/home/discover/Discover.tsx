'use client'
import { FC } from 'react'
import styles from './Discover.module.scss'
import LargeVideoItem from '../../../ui/video-item/LargeVideoItem'
import { videoApi } from '../../../../store/api/video.api'
import VideoItemSceleton from '../../../ui/video-item/VideoItem.sceleton'

const Discover: FC = () => {
	const { data: videos, isLoading, error } = videoApi.useGetAllVideosQuery()
	const {
		data: topVideo,
		isLoading: isLoadingTop,
		error: errorTop,
	} = videoApi.useGetMostPopularVideoQuery()

	const getRandomIndex = () => {
		if (videos?.length && topVideo) {
			const ids = videos.map(video => video.id)
			let index
			do {
				index = Math.floor(Math.random() * ids.length)
			} while (ids[index] === topVideo[0].id)

			return index
		}

		return 0
	}

	if (isLoading || isLoadingTop)
		return (
			<div className={styles.discover}>
				<div className={styles.top_video}>
					<VideoItemSceleton />
				</div>

				<div className={styles.random_video}>
					<VideoItemSceleton />
				</div>
			</div>
		)

	return (
		<div className={styles.discover}>
			<div className={styles.top_video}>
				{topVideo && <LargeVideoItem item={topVideo[0]} />}
			</div>

			<div className={styles.random_video}>
				{videos && <LargeVideoItem item={videos[getRandomIndex()]} />}
			</div>
		</div>
	)
}

export default Discover
