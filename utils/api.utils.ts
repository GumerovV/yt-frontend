import { toastr } from 'react-redux-toastr'

export const getContentType = () => ({
	Authorization: `Bearer ${localStorage.getItem('token')}`,
	'Content-Type': 'application/json',
})

export const errorCatch = (error: any): string =>
	error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message
			: error.response.data.message
		: error.message

export const ToastrError = (error: any, title: string = 'Error') => {
	const message = errorCatch(error)
	toastr.error(title, message)
	throw message
}
