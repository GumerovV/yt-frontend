import React, { FC } from 'react'
import AddComment from './AddComment'
import { IComment } from '../../../../types/comment.interface'
import styles from './Comment.module.scss'
import CommentItem from './CommentItem'
import { useAuth } from '../../../../hooks/useAuth'

const Comments: FC<{ comments: IComment[]; videoId: number }> = ({
	comments,
	videoId,
}) => {
	const { user } = useAuth()

	return (
		<div className={styles.comments}>
			<h2>Комментарии</h2>
			<div className={styles.line} />

			<div className={styles.comment_item}>
				{comments.length ? (
					comments.map(comment => <CommentItem comment={comment} />)
				) : (
					<span>Комментариев еще нет, будьте первыми!</span>
				)}
			</div>

			<div className={styles.comment_form}>
				{user ? (
					<AddComment videoId={videoId} />
				) : (
					<span className='text-center mb-4'>
						Чтобы написать комменатрий, войдите или зарегистрируйтесь...
					</span>
				)}
			</div>
		</div>
	)
}

export default Comments
