import { FC, useState } from 'react'
import { HiUpload } from 'react-icons/hi'
import styles from '../icons-rigth/IconsRight.module.scss'
import { videoApi } from '../../../../store/api/video.api'
import UploadVideoModal from './UploadVideoModal'

const UploadVideo: FC = () => {
	const [videoId, setVideoId] = useState<number | null>(null)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [createVideo, { isLoading, error }] = videoApi.useCreateVideoMutation()

	if (error) return null

	return (
		<>
			<button
				className={styles.button}
				disabled={isLoading}
				onClick={() =>
					createVideo()
						.unwrap()
						.then(id => {
							setVideoId(+id)
							setIsOpen(true)
						})
				}
			>
				<HiUpload />
			</button>

			<UploadVideoModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				videoId={videoId}
			/>
		</>
	)
}

export default UploadVideo
