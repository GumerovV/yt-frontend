import { FC, PropsWithChildren } from 'react'
import { IButton } from './Button.inteface'
import classNames from 'classnames'

import styles from './Button.module.scss'
import Loader from '../loader/Loader'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	isLoading,
	...rest
}) => {
	return (
		<button className={classNames(styles.button, className)} {...rest}>
			{isLoading ? <Loader /> : children}
		</button>
	)
}

export default Button
