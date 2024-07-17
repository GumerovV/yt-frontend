import { Middleware, MiddlewareAPI } from 'redux'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { ToastrError } from '../../utils/api.utils'

export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => next => action => {
		if (isRejectedWithValue(action)) {
			ToastrError(action.error, 'RTK error')
		}

		return next(action)
	}
