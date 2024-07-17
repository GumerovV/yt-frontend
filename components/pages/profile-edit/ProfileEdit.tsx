'use client'
import React, { useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { api } from '../../../store/api/api'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IUserDto } from '../../../types/user.interface'
import Field from '../../ui/form-field/Field'
import TextArea from '../../ui/text-area/TextArea'
import { validEmail } from '../../layout/header/auth-form/auth-form.validate'
import styles from './ProfileEdit.module.scss'
import UploadField from '../../ui/upload-field/UploadField'
import { IMediaResponse } from '../../../services/media/media.interface'
import AvatarInfo from './AvatarInfo'
import Button from '../../ui/button/Button'
import { toastr } from 'react-redux-toastr'

const ProfileEdit = () => {
	const { user } = useAuth()
	const {
		data: profile,
		isLoading,
		error,
	} = api.useGetProfileQuery({ skip: !user })
	const [updateProfile, { data, isLoading: isUpdating, error: updateError }] =
		api.useUpdateProfileMutation()

	const {
		register,
		control,
		setValue,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<IUserDto>({ mode: 'onChange' })

	useEffect(() => {
		if (profile) {
			setValue('email', profile.email)
			setValue('name', profile.name)
			setValue('description', profile.description)
			setValue('avatarPath', profile.avatarPath)
		}
	}, [profile])

	const onSubmit: SubmitHandler<IUserDto> = async data => {
		if (user) {
			try {
				await updateProfile({ ...data, id: String(user.id) }).unwrap()
				toastr.success('Статус', 'Профиль успешно обновлен!')
			} catch (e) {
				toastr.error(
					'Статус',
					'При обновлении произошла ошибка, потворите еще раз...',
				)
			}
		}
	}

	if (!user) return null

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('email', {
					required: 'Email обязателен!',
					pattern: {
						value: validEmail,
						message: 'Введите корректный email!',
					},
				})}
				placeholder='Введите email'
				error={errors.email}
			/>
			<Field {...register('name')} placeholder='Введите имя' />
			<TextArea
				{...register('description')}
				placeholder='Введитее описание канала'
			/>
			<div className='mt-5'>
				<AvatarInfo url={watch('avatarPath')} />
				<Controller
					control={control}
					name='avatarPath'
					render={({ field: { onChange } }) => (
						<UploadField
							onChange={(val: IMediaResponse) => onChange(val.url)}
						/>
					)}
				/>
			</div>

			<Button isLoading={isUpdating} disabled={isUpdating}>
				Сохранить
			</Button>
		</form>
	)
}

export default ProfileEdit
