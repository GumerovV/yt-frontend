import { SubmitHandler, useForm } from 'react-hook-form'
import { IVideoDto } from '../../../../../types/video.interface'
import { videoApi } from '../../../../../store/api/video.api'
import { useState } from 'react'
import { IMediaResponse } from '../../../../../services/media/media.interface'

interface IUseUploadVideoForm {
	handleCloseModal: () => void
	videoId: number
}

export const useUploadVideoForm = ({
	handleCloseModal,
	videoId,
}: IUseUploadVideoForm) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		control,
		reset,
		setValue,
	} = useForm<IVideoDto>({ mode: 'onChange' })

	const [updateVideo, { isSuccess }] = videoApi.useUpdateVideoMutation()

	const onSubmit: SubmitHandler<IVideoDto> = data => {
		updateVideo({ ...data, id: String(videoId) })
			.unwrap()
			.then(() => {
				reset()
				handleCloseModal()
			})
	}

	const videoPath = watch('videoPath')
	const thumbnailPath = watch('thumbnailPath')
	const [videoFileName, setVideoFileName] = useState('')

	const handleUploadVideo = (value: IMediaResponse) => {
		console.log(value)
		setValue('videoPath', value.url)
		setValue('name', value.name)
		setVideoFileName(value.name)
	}

	const [isChosen, setIsChosen] = useState<boolean>(false)
	const [isUploaded, setIsUploaded] = useState<boolean>(false)
	const [percent, setPercent] = useState<number>(0)

	const changePercent = (value: number) => {
		setPercent(value)
		if (value === 100) setIsUploaded(true)
	}

	return {
		form: {
			register,
			errors,
			control,
			handleSubmit,
			onSubmit,
		},
		media: {
			videoPath,
			thumbnailPath,
			videoFileName,
			handleUploadVideo,
		},
		status: {
			isSuccess,
			isChosen,
			setIsChosen,
			percent,
			changePercent,
			isUploaded,
		},
	}
}
