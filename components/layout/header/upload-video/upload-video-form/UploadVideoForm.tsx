import React, { FC } from 'react'
import { useUploadVideoForm } from './useUploadVideoForm'
import SuccessMessage from './SuccessMessage'
import Field from '../../../../ui/form-field/Field'
import TextArea from '../../../../ui/text-area/TextArea'
import { Controller } from 'react-hook-form'
import UploadField from '../../../../ui/upload-field/UploadField'
import { IMediaResponse } from '../../../../../services/media/media.interface'
import TogglePublic from './toggle-public/TogglePublic'
import UploadInformation from './upload-information/UploadInformation'
import FooterForm from './footer-form/FooterForm'
import styles from '../UploadVideo.module.scss'

const UploadVideoForm: FC<{
	videoId: number
	handleCloseModal: () => void
}> = ({ videoId, handleCloseModal }) => {
	const { form, status, media } = useUploadVideoForm({
		handleCloseModal,
		videoId,
	})

	return (
		<form
			onSubmit={form.handleSubmit(form.onSubmit)}
			className='flex flex-wrap'
		>
			{status.isSuccess && <SuccessMessage />}
			{status.isChosen ? (
				<>
					<div className='w-7/12 pr-6 pt-3'>
						<Field
							{...form.register('name', { required: 'Название обязательно!' })}
							placeholder='Введите название'
							error={form.errors.name}
						/>
						<TextArea
							{...form.register('description', {
								required: 'Описание обязательно!',
							})}
							className='resize-none h-[250px]'
							placeholder='Введите описание'
							error={form.errors.description}
						/>
						<div className='mt-8'>
							<Controller
								control={form.control}
								name='thumbnailPath'
								render={({ field: { onChange } }) => (
									<UploadField
										folder='thumbnails'
										onChange={(value: IMediaResponse) => onChange(value.url)}
									/>
								)}
							/>
						</div>
						<Controller
							control={form.control}
							name='isPublic'
							render={({ field: { onChange, value } }) => (
								<TogglePublic
									clickHandler={() => onChange(!value)}
									isEnabled={!!value}
								/>
							)}
						/>
					</div>
					<div className='w-5/12 p-3 pl-10'>
						<UploadInformation
							fileName={media.videoFileName}
							videoId={videoId}
							isUploaded={status.isUploaded}
							thumbnailPath={media.thumbnailPath}
						/>
					</div>

					<FooterForm isUploaded={status.isUploaded} percent={status.percent} />
				</>
			) : (
				<div className={styles.uploadScreen}>
					<Controller
						control={form.control}
						name='videoPath'
						render={() => (
							<UploadField
								title='Сначала загрузи видео! 👇'
								folder='videos'
								onChange={media.handleUploadVideo}
								setIsChosen={status.setIsChosen}
								setValue={status.changePercent}
							/>
						)}
					/>
				</div>
			)}
		</form>
	)
}

export default UploadVideoForm
