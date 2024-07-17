import React, { FC } from 'react'
import { IUploadInformation } from './upload-information'
import styles from './UploadInformation.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const UploadInformation: FC<IUploadInformation> = ({
	isUploaded,
	videoId,
	thumbnailPath,
	fileName,
}) => {
	return (
		<div className={styles.info}>
			{!thumbnailPath ? (
				<div className={styles.thumbnail}>Вы должны загрузить превью!</div>
			) : (
				<Image
					src={`http://localhost:4000/${thumbnailPath}`}
					alt={thumbnailPath}
					width={394}
					height={190}
					layout='responsive'
				/>
			)}
			<div className={styles.details}>
				<div>
					<span>Ссылка на видео</span>
					<span>
						<Link href={`/v/${videoId}`}>
							<span className='text-primary'>{`/v/${videoId}`}</span>
						</Link>
					</span>
				</div>
				<div>
					<span>Название файла</span>
					<span className='text-white'>{fileName}</span>
				</div>
			</div>
		</div>
	)
}

export default UploadInformation
