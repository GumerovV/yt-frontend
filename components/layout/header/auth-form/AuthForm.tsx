'use client'
import { FC, useState } from 'react'
import { useOutside } from '../../../../hooks/useOutside'
import { useAuth } from '../../../../hooks/useAuth'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './AuthForm.module.scss'
import styleIcon from '../icons-rigth/IconsRight.module.scss'
import { FaUserCircle } from 'react-icons/fa'
import { IAuthFields } from './auth-form.interface'
import Button from '../../../ui/button/Button'
import Field from '../../../ui/form-field/Field'
import { validEmail } from './auth-form.validate'
import { useActions } from '../../../../hooks/useActions'

const AuthForm: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const [type, setType] = useState<'login' | 'register'>('login')

	const { login, register: registerAction } = useActions()
	const { isLoading } = useAuth()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IAuthFields>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		if (type === 'login') {
			const res = login(data)
			console.log(res)
		} else if (type === 'register') registerAction(data)
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={styleIcon.button} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle />
			</button>

			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'Email обязателен!',
							pattern: {
								value: validEmail,
								message: 'Введите правильный email!',
							},
						})}
						error={errors.email}
						placeholder='Введите Email'
					/>
					<Field
						{...register('password', {
							required: 'Пароль обязателен!',
						})}
						error={errors.password}
						placeholder='Введите пароль'
						type='password'
					/>
					<div className={styles['buttons-wrapper']}>
						<Button
							isLoading={type === 'login' && isLoading}
							disabled={isLoading}
							onClick={() => setType('login')}
						>
							Войти
						</Button>
						<Button
							className={styles.register}
							isLoading={type === 'register' && isLoading}
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Зарегистрироваться
						</Button>
					</div>
				</form>
			)}
		</div>
	)
}

export default AuthForm
