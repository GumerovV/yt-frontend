import React, { FC } from 'react'
import { ITogglePublic } from './toggle-public.inteface'
import styles from './TogglePublic.module.scss'
import { Switch } from '@headlessui/react'
import classNames from 'classnames'

const TogglePublic: FC<ITogglePublic> = ({ isEnabled, clickHandler }) => {
	return (
		<div className={styles.wrapper}>
			<Switch
				checked={isEnabled}
				onChange={clickHandler}
				className={classNames(styles.switch, {
					'bg-primary bg-opacity-80': isEnabled,
					'bg-gray-400': !isEnabled,
				})}
			>
				<span
					className={classNames(styles.point, {
						'translate-x-9': isEnabled,
						'translate-x-0': !isEnabled,
					})}
				/>
			</Switch>
			<span className='' onClick={clickHandler}>
				Публично видео
			</span>
		</div>
	)
}

export default TogglePublic
