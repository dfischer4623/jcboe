import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './features/userdataSlice'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, UserReducer)


export const store = configureStore({
  reducer: {
    userdata: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export const persistor = persistStore(store)
