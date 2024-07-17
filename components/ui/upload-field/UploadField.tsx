import React, { FC } from 'react'
import { IUploadField } from './upload-field.inteface'
import { useUploadFile } from './useUploadFile'
import styles from './UploadField.module.scss'

const UploadField: FC<IUploadField> = ({
	title,
	folder,
	setValue,
	setIsChosen,
	onChange,
}) => {
	const { uploadFile } = useUploadFile(onChange, folder, setValue, setIsChosen)

	return (
		<div className={styles.file}>
			{title && <h1>{title}</h1>}
			<label>
				<span className='sr-only'>Выберите файл</span>
				<input type='file' onChange={uploadFile} />
			</label>
		</div>
	)
}

export default UploadField
