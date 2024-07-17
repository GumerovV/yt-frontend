import React, { FC } from 'react'
import { IVideoItem } from './video-item.interface'
import styles from './VideoItem.module.scss'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'
import { BiEdit, BiTrash } from 'react-icons/bi'
import Image from 'next/image'
import VideoDuration from './VideoDuration'
import UserAvatar from '../user-avatar/UserAvatar'
import Link from 'next/link'
import VideoStatistics from './VideoStatistics'

const VideoItem: FC<IVideoItem> = ({
	item,
	isSmall,
	removeHandler,
	isUpdateLink,
}) => {
	const { push } = useRouter()

	return (
		<div className={classNames(styles.video_item, { [styles.small]: isSmall })}>
			{!!removeHandler && (
				<button
					className='absolute text-2xl text-red-700 right-3 bottom-3 z-10 opacity-80 hover:opacity-100 transition-all duration-300'
					onClick={() => removeHandler(+item.id)}
				>
					<BiTrash />
				</button>
			)}

			{!!isUpdateLink && (
				<button
					className='absolute text-2xl text-blue-700 right-11 bottom-3 z-10 opacity-80 hover:opacity-100 transition-all duration-300'
					onClick={() => push(`/video/edit/${item.id}`)}
				>
					<BiEdit />
				</button>
			)}

			<div className={styles.thumbnail}>
				{item.thumbnailPath && (
					<Image
						src={`http://localhost:4000/${item.thumbnailPath}`}
						alt={item.name}
						width={185}
						height={103}
						layout='responsive'
						priority
					/>
				)}
				<VideoDuration duration={item.duration} isBottom={false} />
				{item?.user && (
					<div className='absolute right-3 -bottom-7'>
						<UserAvatar user={item.user} />
					</div>
				)}
			</div>

			<div className={styles.information}>
				{!isSmall && item?.user && (
					<div className={styles.author}>
						{item.user?.name || item.user.email}
					</div>
				)}
				<Link href={`/v/${item.id}`} legacyBehavior>
					<a className={styles.name} aria-label={item.name}>
						{item.name}
					</a>
				</Link>
				<VideoStatistics
					views={item.views}
					createdAt={!isSmall ? item.createdAt : undefined}
				/>
			</div>
		</div>
	)
}

export default VideoItem
