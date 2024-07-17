import React, { FC } from 'react'
import { IComment } from '../../../../types/comment.interface'
import ChannelInfo from '../../../ui/channel-info/ChannelInfo'

const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
	return <ChannelInfo user={comment.user} message={comment.message} />
}

export default CommentItem
