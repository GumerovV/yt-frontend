'use client'
import React from 'react'
import { NextPage } from 'next'
import Channel from '../../../components/pages/channel/Channel'

const ChannelPage: NextPage<{ params: { id: string } }> = ({
	params: { id },
}) => {
	return <Channel id={Number(id)} />
}

export default ChannelPage
