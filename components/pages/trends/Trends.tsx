'use client'
import React from 'react'
import { videoApi } from '../../../store/api/video.api'
import Catalog from '../home/catalog/Catalog'

const Trends = () => {
	const {
		data: topVideos,
		isLoading,
		error,
	} = videoApi.useGetMostPopularVideoQuery()

	return (
		<div>
			<Catalog
				videos={topVideos || []}
				isLoading={isLoading}
				title={'Тренды'}
			/>
		</div>
	)
}

export default Trends
