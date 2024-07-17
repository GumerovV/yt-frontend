'use client'
import { FC } from 'react'
import UploadVideo from '../upload-video/UploadVideo'
import AuthForm from '../auth-form/AuthForm'
import { useAuth } from '../../../../hooks/useAuth'

import styles from './IconsRight.module.scss'
import ProfileMenu from '../profile-menu/ProfileMenu'

const IconsRight: FC = () => {
	const { user } = useAuth()

	return (
		<div className={styles.icons}>
			{user ? (
				<>
					<ProfileMenu />
					<UploadVideo />
				</>
			) : (
				<AuthForm />
			)}
		</div>
	)
}

export default IconsRight
