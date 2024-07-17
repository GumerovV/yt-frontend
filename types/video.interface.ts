import { IUser } from './user.interface'
import { IBase } from './base.interface'
import { IComment } from './comment.interface'

export interface IVideo extends IBase {
	name: string
	isPublic?: boolean
	views: number
	likesCount: number
	duration: number
	description: string
	videoPath: string
	thumbnailPath: string
	user: IUser
	comments?: IComment[]
}

export interface IVideoDto
	extends Pick<
		IVideo,
		'id' | 'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'
	> {}
