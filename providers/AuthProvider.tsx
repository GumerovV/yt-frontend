import dynamic from 'next/dynamic'
import React, { FC, PropsWithChildren } from 'react'
import { TypeComponentAuthFields } from './private-route.interface'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false,
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser },
}) => {
	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
	)
}

export default AuthProvider
