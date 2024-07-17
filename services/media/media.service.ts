import { axiosClassic } from '../../api/axios'
import { IMediaResponse } from './media.interface'

export const MediaService = {
	async upload(
		media: FormData,
		folder: string = '',
		setValue?: (val: number) => void,
	) {
		return axiosClassic.post<IMediaResponse>('/media', media, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
			onUploadProgress: uploadEvent => {
				if (setValue && uploadEvent.total) {
					const percent = (uploadEvent.loaded / uploadEvent.total) * 100
					setValue(Math.ceil(percent))
				}
			},
		})
	},
}
