import React, { FC } from 'react'
import styles from './ProfileEdit.module.scss'
import Image from 'next/image'

const AvatarInfo: FC<{ url: string }> = ({ url }) => {
	return (
		<div className={styles.avatarWrapper}>
			<div className={styles.avatarLarge}>
				<Image
					src={`http://localhost:4000/${url}`}
					alt={''}
					width={80}
					height={80}
				/>
				80 x 80
			</div>
			<div className={styles.avatarMedium}>
				<Image
					src={`http://localhost:4000/${url}`}
					alt={''}
					width={60}
					height={60}
				/>
				70 x 70
			</div>
			<div className={styles.avatarSmall}>
				<Image
					src={`http://localhost:4000/${url}`}
					alt={''}
					width={40}
					height={40}
				/>
				40 x 40
			</div>
		</div>
	)
}

export default AvatarInfo
