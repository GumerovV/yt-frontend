import React, { forwardRef } from 'react'
import { ITextArea } from './TextArea.interface'

import styles from './TextArea.module.scss'

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ error, style, ...rest }, ref) => {
		return (
			<div className={styles.textarea} style={style}>
				<textarea ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	},
)

TextArea.displayName = 'TextArea'

export default TextArea
