import { api } from './api'
import { IVideo, IVideoDto } from '../../types/video.interface'
import { VIDEO } from '../../services/video.service'

export const videoApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllVideos: builder.query<IVideo[], void>({
			query: () => ({ url: `${VIDEO}` }),
			providesTags: result => [{ type: 'Video' }],
		}),
		getMostPopularVideo: builder.query<IVideo[], void>({
			query: () => ({ url: `${VIDEO}/most-popular` }),
			providesTags: result => [{ type: 'Video' }],
		}),
		getVideoBySearchTerm: builder.query<IVideo[], string>({
			query: searchTerm => ({ url: `${VIDEO}`, params: { searchTerm } }),
		}),
		getVideoById: builder.query<IVideo, number>({
			query: id => `${VIDEO}/${id}`,
			providesTags: (result, error, id) => [{ type: 'Video', id }],
		}),
		createVideo: builder.mutation<string, void>({
			query: () => ({
				url: `${VIDEO}`,
				method: 'POST',
			}),
			invalidatesTags: () => [{ type: 'Profile' }],
		}),
		updateVideo: builder.mutation<IVideo, IVideoDto>({
			query: ({ id, ...body }) => ({
				url: `${VIDEO}/${id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Video', id },
				{ type: 'Profile' },
			],
		}),
		updateViews: builder.mutation<IVideo, number>({
			query: id => ({
				url: `${VIDEO}/update-views/${id}`,
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, id) => [
				{ type: 'Video', id },
				{ type: 'Profile' },
			],
		}),
		updateLikes: builder.mutation<IVideo, number>({
			query: id => ({
				url: `${VIDEO}/update-likes/${id}`,
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, id) => [
				{ type: 'Video', id },
				{ type: 'Profile' },
			],
		}),
		deleteVideo: builder.mutation<void, number>({
			query: id => ({
				url: `${VIDEO}/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [{ type: 'Video' }, { type: 'Profile' }],
		}),
	}),
})
