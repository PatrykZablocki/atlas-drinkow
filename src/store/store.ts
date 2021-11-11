import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import appState from './appSlice'
import { rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: appState,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false }), sagaMiddleware],
})

sagaMiddleware.run(rootSaga)
