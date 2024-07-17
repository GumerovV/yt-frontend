import React from 'react'
import styles from './VideoItem.module.scss'

const VideoItemSceleton = () => {
	return (
		<div className={styles.sceleton}>
			<div className={styles.image}></div>
			<div className={styles.content}>
				<h1></h1>
				<p></p>
			</div>
		</div>
	)
}

export default VideoItemSceleton
