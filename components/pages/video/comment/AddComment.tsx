import React, { FC } from 'react'
import { commentApi } from '../../../../store/api/comment.api'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ICommentDto } from '../../../../types/comment.interface'
import Field from '../../../ui/form-field/Field'
import { MdSend } from 'react-icons/md'
import styles from '../../../layout/header/auth-form/AuthForm.module.scss'
import Loader from '../../../ui/loader/Loader'

const AddComment: FC<{ videoId: number }> = ({ videoId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<ICommentDto>({
		mode: 'onChange',
	})

	const [writeComment, { isLoading }] = commentApi.useCreateCommentMutation()

	const onSubmit: SubmitHandler<ICommentDto> = async data => {
		writeComment({ ...data, videoId })
			.unwrap()
			.then(() => reset())
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className='relative'>
				<Field
					{...register('message', { required: 'Сообщение обязательно!' })}
					placeholder='Введите комментарий...'
					error={errors.message}
				/>

				<button
					className='absolute top-5 right-2 text-white opacity-80 hover:opacity-100 transition-all'
					disabled={isLoading}
				>
					{isLoading ? <Loader /> : <MdSend />}
				</button>
			</div>
		</form>
	)
}

export default AddComment
