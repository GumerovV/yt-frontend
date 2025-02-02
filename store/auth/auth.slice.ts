import { createSlice } from '@reduxjs/toolkit'
import { IAuthInitialState } from './auth.interface'
import { login, logout, register } from './auth.actions'

const InitialState: IAuthInitialState = {
	user: null,
	accessToken: '',
	isLoading: false,
}

export const AuthSlice = createSlice({
	name: 'auth',
	initialState: InitialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
				state.accessToken = payload.accessToken
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.user = null
				state.accessToken = ''
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
				state.accessToken = payload.accessToken
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
				state.accessToken = ''
			})
			.addCase(logout.pending, state => {
				state.isLoading = true
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
				state.accessToken = ''
			})
			.addCase(logout.rejected, state => {
				state.isLoading = false
				state.user = null
				state.accessToken = ''
			})
	},
})
