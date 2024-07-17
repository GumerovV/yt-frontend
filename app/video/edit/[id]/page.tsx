import React from 'react'
import { NextPage } from 'next'
import VideoEdit from '../../../../components/pages/video-edit/VideoEdit'

const EditVideo: NextPage<{ params: { id: string } }> = ({
	params: { id },
}) => {
	return <VideoEdit videoId={Number(id)} />
}

export default EditVideo
