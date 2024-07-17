import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { MediaService } from '../../../services/media/media.service'
import { errorCatch } from '../../../utils/api.utils'

export const useUploadFile = (
	onChange: (...event: any) => void,
	folder?: string,
	setValue?: (val: number) => void,
	setIsChosen?: Dispatch<SetStateAction<boolean>>,
) => {
	const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files?.length) return

		setIsChosen && setIsChosen(true)

		const formData = new FormData()
		formData.append('media', files[0])

		await MediaService.upload(formData, folder, setValue)
			.then(({ data }) => onChange(data))
			.catch(e => alert(errorCatch(e)))
	}

	return {
		uploadFile,
	}
}
