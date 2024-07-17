import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../api/axios'
import { TypeRootState } from '../store'
import { IUser, IUserDto } from '../../types/user.interface'
import { USER } from '../../services/user.service'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Video', 'Profile', 'User'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.accessToken

			if (token) headers.set('Authorization', `Bearer ${token}`)

			return headers
		},
	}),
	endpoints: builder => ({
		getProfile: builder.query<IUser, any>({
			query: () => `${USER}/profile`,
			providesTags: () => [{ type: 'Profile' }],
		}),
		getUserById: builder.query<IUser, number>({
			query: id => `${USER}/${id}`,
			providesTags: () => [{ type: 'Profile' }],
		}),
		subscribeToUser: builder.mutation({
			query: channelId => ({
				url: `${USER}/subscribe/${channelId}`,
				method: 'PATCH',
			}),
			invalidatesTags: result => [{ type: 'Profile' }, { type: 'Video' }],
		}),
		updateProfile: builder.mutation<IUser, IUserDto>({
			query: ({ id, ...body }) => ({
				url: `${USER}/${id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: 'Profile' }],
		}),
	}),
})
