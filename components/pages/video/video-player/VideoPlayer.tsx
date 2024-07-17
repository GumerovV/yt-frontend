import React, { FC } from 'react'
import { usePlayer } from './usePlayer'
import styles from './VideoPlayer.module.scss'
import classNames from 'classnames'
import { IoPause, IoPlay } from 'react-icons/io5'
import { BsFullscreen } from 'react-icons/bs'

const VideoPlayer: FC<{ videoPath: string }> = ({ videoPath }) => {
	const { videoRef, playerState, toggleVideo, fullscreen } = usePlayer()

	return (
		<div className={styles.wrapper}>
			<video
				src={`http://localhost:4000/${videoPath}`}
				ref={videoRef}
				className={styles.player}
				preload='metadata'
				onClick={toggleVideo}
			/>

			<div
				className={classNames(styles.controls, {
					[styles.hide]: playerState.isPlaying,
				})}
			>
				<button onClick={toggleVideo}>
					{playerState.isPlaying ? <IoPause /> : <IoPlay />}
				</button>

				<div className={styles.progressBarWrapper}>
					<div
						className={styles.progressBar}
						style={{ width: `${playerState.progress}%` }}
					/>
				</div>

				<div className={styles.timeControls}>
					<p>
						{Math.floor(playerState.currentTime / 60)}:
						{('0' + Math.floor(playerState.currentTime % 60)).slice(-2)}
					</p>
					<p>/</p>
					<p>
						{' '}
						{Math.floor(playerState.videoTime / 60)}:
						{('0' + Math.floor(playerState.videoTime % 60)).slice(-2)}
					</p>
				</div>

				<button onClick={fullscreen}>
					<BsFullscreen />
				</button>
			</div>
		</div>
	)
}

export default VideoPlayer
