import { TextareaHTMLAttributes } from 'react'
import { IFieldProps } from '../form-field/Field.interface'

type TypeTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
	IFieldProps

export interface ITextArea extends TypeTextAreaProps {}
