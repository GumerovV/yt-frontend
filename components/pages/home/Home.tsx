'use client'
import { FC } from 'react'
import Discover from './discover/Discover'
import Catalog from './catalog/Catalog'
import { videoApi } from '../../../store/api/video.api'
import { shuffleArray } from '../../../utils/shuffle-array'

const Home: FC = () => {
	const { data: videos, isLoading, error } = videoApi.useGetAllVideosQuery()

	const shuffledVideos = shuffleArray(videos || [])

	return (
		<div>
			<Discover />
			<Catalog
				videos={shuffledVideos}
				isLoading={isLoading}
				title={'Рекомендации'}
			/>
		</div>
	)
}

export default Home
