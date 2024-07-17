import { IVideo } from '../../../types/video.interface'

export interface IHome {
	mostPopularVideo: IVideo
	randomVideo: IVideo
	videos: IVideo[]
}
