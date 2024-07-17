export interface IVideoElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void
	mozRequestFullscreen?: () => void
	webkitRequestFullscreen?: () => void
}

export interface IVideoPlayerState {
	isPlaying: boolean
	currentTime: number
	videoTime: number
	progress: number
}
