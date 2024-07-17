'use client'
import React, { FC, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IVideoDto } from '../../../types/video.interface'
import { videoApi } from '../../../store/api/video.api'
import Field from '../../ui/form-field/Field'
import TextArea from '../../ui/text-area/TextArea'
import UploadField from '../../ui/upload-field/UploadField'
import { IMediaResponse } from '../../../services/media/media.interface'
import TogglePublic from '../../layout/header/upload-video/upload-video-form/toggle-public/TogglePublic'
import Loader from '../../ui/loader/Loader'
import UploadInformation from '../../layout/header/upload-video/upload-video-form/upload-information/UploadInformation'
import Button from '../../ui/button/Button'
import { toastr } from 'react-redux-toastr'
import { useRouter } from 'next/navigation'

interface VideoEditProps {
	videoId: number
}

const VideoEdit: FC<VideoEditProps> = ({ videoId }) => {
	const { push } = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control,
		setValue,
		watch,
	} = useForm<IVideoDto>({ mode: 'onChange' })

	const { data: video, isLoading: isLoadingVideo } =
		videoApi.useGetVideoByIdQuery(videoId)
	const [updateVideo, { isLoading: isUpdating, error: updateError }] =
		videoApi.useUpdateVideoMutation()

	useEffect(() => {
		if (video) {
			setValue('name', video.name)
			setValue('description', video.description)
			setValue('thumbnailPath', video.thumbnailPath)
			setValue('isPublic', video.isPublic)
		}
	}, [video])

	const onSubmit: SubmitHandler<IVideoDto> = async data => {
		try {
			await updateVideo({
				...data,
				id: String(videoId),
			}).unwrap()
			toastr.success('Статус', 'Видео успешно обновлено!')
			push('/studio')
		} catch (error) {
			toastr.error(
				'Статус',
				'При обновлении произошла ошибка, попробуйте снова...',
			)
		}
	}

	if (isLoadingVideo) return <Loader />

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='relative flex justify-between gap-10'
		>
			<div className='w-7/12 space-y-10'>
				<Field
					{...register('name', { required: 'Название обязательно!' })}
					placeholder='Введите название'
					error={errors.name}
				/>
				<TextArea
					{...register('description', { required: 'Описание обязательно!' })}
					placeholder='Введите описание'
					className='resize-none h-[250px]'
					error={errors.description}
				/>
				<div className='space-y-10'>
					<Controller
						control={control}
						name='thumbnailPath'
						render={({ field: { onChange } }) => (
							<UploadField
								onChange={(val: IMediaResponse) => onChange(val.url)}
								folder='thumbnails'
							/>
						)}
					/>
					<Controller
						control={control}
						name='isPublic'
						render={({ field: { onChange, value } }) => (
							<TogglePublic
								clickHandler={() => onChange(!value)}
								isEnabled={!!value}
							/>
						)}
					/>
				</div>
				<div className='w-1/5 h-10'>
					<Button
						isLoading={isUpdating}
						disabled={isUpdating}
						className='w-full h-full'
					>
						Сохранить
					</Button>
				</div>
			</div>
			<div className='w-5/12 bg-gray-800 rounded-2xl p-6'>
				<UploadInformation
					fileName={video?.videoPath || ''}
					videoId={videoId}
					isUploaded={true}
					thumbnailPath={watch('thumbnailPath')}
				/>
			</div>
		</form>
	)
}

export default VideoEdit
