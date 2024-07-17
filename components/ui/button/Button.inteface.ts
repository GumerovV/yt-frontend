import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
	isLoading?: boolean
}

type TypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
export interface IButton extends TypeButtonProps {}
