import { axiosClassic } from '../api/axios'
import { IVideo } from '../types/video.interface'

export const VIDEO = 'video'

export const VideoService = {
	async getAll() {
		const response = await axiosClassic.get<IVideo[]>(`/${VIDEO}`)
		return response.data
	},

	async getVideo(id: number) {
		const response = await axiosClassic.get<IVideo>(`/${VIDEO}/${id}`)
		return response.data
	},

	async getMostPopular() {
		const response = await axiosClassic.get<IVideo[]>(`/${VIDEO}/most-popular`)
		return response.data
	},
}
