import React from 'react'
import { NextPage } from 'next'
import Video from '../../../components/pages/video/Video'

const VideoPage: NextPage<{ params: { id: string } }> = ({
	params: { id },
}) => {
	return <Video videoId={Number(id)} />
}

export default VideoPage
