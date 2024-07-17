import { axiosClassic } from '../api/axios'
import { IUser } from '../types/user.interface'

export const USER = 'user'

export const UserService = {
	async getAll() {
		const response = await axiosClassic.get<IUser[]>(`/${USER}`)
		return response.data
	},

	async getUser(id: number) {
		const response = await axiosClassic.get<IUser>(`/${USER}/${id}`)
		return response.data
	},
}
