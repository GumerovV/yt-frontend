'use client'
import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../store/api/api'
import Catalog from '../pages/home/catalog/Catalog'
import { videoApi } from '../../store/api/video.api'

const Studio = () => {
	const { user } = useAuth()
	const { data: profile, isLoading } = api.useGetProfileQuery({ skip: !user })
	const [removeVideo] = videoApi.useDeleteVideoMutation()

	const publicVideos =
		profile?.videos?.filter(video => video.isPublic === true) || []
	const privateVideos =
		profile?.videos?.filter(video => video.isPublic === false) || []

	return (
		<div className='space-y-10'>
			<Catalog
				videos={publicVideos || []}
				isLoading={isLoading}
				title='Опубликованные видео'
				removeHandler={removeVideo}
				isUpdateLink={true}
			/>
			<Catalog
				videos={privateVideos || []}
				isLoading={isLoading}
				title='Не опубликованные видео'
				removeHandler={removeVideo}
				isUpdateLink={true}
			/>
		</div>
	)
}

export default Studio
