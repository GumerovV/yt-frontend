import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import { rootReducer } from './root-reducer'
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { api } from './api/api'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(api.middleware),
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
