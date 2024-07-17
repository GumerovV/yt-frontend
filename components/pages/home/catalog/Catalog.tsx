import { FC } from 'react'
import VideoItem from '../../../ui/video-item/VideoItem'
import styles from './Catalog.module.scss'
import VideoItemSceleton from '../../../ui/video-item/VideoItem.sceleton'
import { IVideo } from '../../../../types/video.interface'

const Catalog: FC<{
	videos: IVideo[]
	isLoading: boolean
	title: string
	removeHandler?: (val: number) => void
	isUpdateLink?: boolean
}> = ({ videos, isLoading, title, removeHandler, isUpdateLink }) => {
	if (isLoading)
		return (
			<>
				<h2 className='text-3xl text-white font-semibold mb-10'>{title}</h2>
				<div className={styles.catalog}>
					{Array.from({ length: 12 }).map((_, index) => (
						<VideoItemSceleton />
					))}
				</div>
			</>
		)

	if (!videos.length)
		return (
			<>
				<h2 className='text-3xl text-white font-semibold mb-10'>{title}</h2>
				<h3 className='text-lg text-gray-500 font-medium'>
					Видео не найдены...
				</h3>
			</>
		)

	return (
		<>
			<h2 className='text-3xl text-white font-semibold mb-10'> {title}</h2>
			<div className={styles.catalog}>
				{videos?.length &&
					videos?.map(item => (
						<VideoItem
							item={item}
							removeHandler={removeHandler}
							isUpdateLink={isUpdateLink}
						/>
					))}
			</div>
		</>
	)
}

export default Catalog
