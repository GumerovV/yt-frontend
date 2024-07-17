import { IVideo } from './video.interface'
import { IBase } from './base.interface'

export interface IUser extends IBase {
	email: string
	name: string
	isVerified?: boolean
	subscribersCount?: number
	description: string
	avatarPath: string
	videos?: IVideo[]
	subscriptions: ISubscription[]
	liked: ILike[]
}

export interface ILike extends IBase {
	video: IVideo
}

export interface ISubscription extends IBase {
	toUser: IUser
}

export interface IUserDto
	extends Pick<IUser, 'id' | 'email' | 'name' | 'description' | 'avatarPath'> {}
