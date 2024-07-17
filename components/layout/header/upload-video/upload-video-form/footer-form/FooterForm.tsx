import React, { FC } from 'react'
import { IFooterForm } from './footer-from.inteface'
import styles from './FooterForm.module.scss'
import { MdCheck, MdUpload } from 'react-icons/md'
import Button from '../../../../../ui/button/Button'

const FooterForm: FC<IFooterForm> = ({ percent, isUploaded }) => {
	return (
		<div className={styles.footer}>
			<div>
				{!isUploaded ? <MdUpload /> : <MdCheck />}
				<span>
					{isUploaded ? 'Видео загружено' : `Видео загружается ${percent}%...`}
				</span>
			</div>
			<div>
				<Button>Сохранить</Button>
			</div>
		</div>
	)
}

export default FooterForm
