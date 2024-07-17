import { combineReducers } from 'redux'
import { AuthSlice } from './auth/auth.slice'
import { reducer as toastReducer } from 'react-redux-toastr'
import { api } from './api/api'

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: AuthSlice.reducer,
	toastr: toastReducer,
})
