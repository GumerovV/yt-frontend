import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthData } from '../../services/auth/auth.helper'
import { IAuthFields } from '../../components/layout/header/auth-form/auth-form.interface'
import { ToastrError } from '../../utils/api.utils'
import { AuthService } from '../../services/auth/auth.service'
import { toastr } from 'react-redux-toastr'

export const register = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const res = await AuthService.register(email, password)
			toastr.success('Регистрация', 'Вы успешно зарегестрировались!')
			return res
		} catch (e) {
			ToastrError(e)
			return thunkAPI.rejectWithValue(e)
		}
	},
)

export const login = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const res = await AuthService.login(email, password)
			toastr.success('Авторизация', 'Вы успешно вошли!')
			return res
		} catch (e) {
			ToastrError(e)
			return thunkAPI.rejectWithValue(e)
		}
	},
)

export const logout = createAsyncThunk('auth/logout', async () => {
	toastr.warning('Выход из системы', 'Вы успешно вышли из системы!')
	return {}
})
