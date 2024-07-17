'use client'
import React, { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import ReduxToastr from 'react-redux-toastr'
import NextProgressClient from '../components/next-progress/NextProgressClient'

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NextProgressClient />
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={false}>
					{children}
					<ReduxToastr
						timeOut={4000}
						newestOnTop={false}
						progressBar
						preventDuplicates
						closeOnToastrClick
						transitionIn={'fadeIn'}
						transitionOut={'fadeOut'}
					/>
				</PersistGate>
			</Provider>
		</>
	)
}

export default Providers
