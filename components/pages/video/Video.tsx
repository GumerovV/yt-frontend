'use client'
import React, { FC, useEffect } from 'react'
import VideoPlayer from './video-player/VideoPlayer'
import { videoApi } from '../../../store/api/video.api'
import styles from './Video.module.scss'
import Comments from './comment/Comments'
import VideoDetail from './video-detail/VideoDetail'
import classNames from 'classnames'

const Video: FC<{ videoId: number }> = ({ videoId }) => {
	const { data: video, isLoading } = videoApi.useGetVideoByIdQuery(videoId)
	const [updateViews] = videoApi.useUpdateViewsMutation()

	useEffect(() => {
		if (video?.isPublic) updateViews(videoId)
	}, [videoId, isLoading])

	return (
		<>
			<div className={styles.layout}>
				<VideoPlayer videoPath={video?.videoPath || ''} />
				{video && (
					<Comments
						videoId={Number(video.id)}
						comments={video?.comments || []}
					/>
				)}
			</div>
			<div className={classNames(styles.layout, 'mt-5')}>
				{video && <VideoDetail video={video} />}
				<div></div>
			</div>
		</>
	)
}

export default Video
