import React, { FC } from 'react'
import styles from './VideoItem.module.scss'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'
import Image from 'next/image'
import VideoDuration from './VideoDuration'
import UserAvatar from '../user-avatar/UserAvatar'
import Link from 'next/link'
import VideoStatistics from './VideoStatistics'
import { IVideo } from '../../../types/video.interface'

const LargeVideoItem: FC<{ item: IVideo }> = ({ item }) => {
	const { push } = useRouter()

	return (
		<div className={classNames(styles.video_item, styles.large_item)}>
			<div className={styles.thumbnail}>
				{item.thumbnailPath && (
					<Image
						src={`http://localhost:4000/${item.thumbnailPath}`}
						alt={item.name}
						className={styles['bg-image']}
						layout='fill'
						priority
					/>
				)}
				<VideoDuration duration={item.duration} isBottom={true} />
				<div className={styles.information}>
					<Link href={`/v/${item.id}`} legacyBehavior>
						<a className={styles.name}>{item.name}</a>
					</Link>
					<UserAvatar user={item.user} />
					<div className={styles.author}>
						{item.user?.name || item.user.email}
					</div>
					<VideoStatistics views={item.views} createdAt={item.createdAt} />
				</div>
			</div>
		</div>
	)
}

export default LargeVideoItem
