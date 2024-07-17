'use client'
import React, { FC } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { api } from '../../../store/api/api'
import Catalog from '../home/catalog/Catalog'

const Liked: FC = () => {
	const { user } = useAuth()
	const { data: profile, isLoading } = api.useGetProfileQuery({ skip: !user })

	const videos = profile?.liked.map(like => like.video)

	return (
		<Catalog
			videos={videos || []}
			isLoading={isLoading}
			title='Понравившиеся'
		/>
	)
}

export default Liked
