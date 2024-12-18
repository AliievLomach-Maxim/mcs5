import { configureStore } from '@reduxjs/toolkit'
import { counterPersistedReducer } from './counterSlice'
import { usersReducer } from './usersSlice'

import { persistStore } from 'redux-persist'

export const store = configureStore({
  reducer: {
    counter: counterPersistedReducer,
    users: usersReducer,
    users2: usersReducer,
    users3: usersReducer,
  },
})
export const persistor = persistStore(store)

// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { counterPersistedReducer } from './counterSlice'
// import { usersReducer } from './usersSlice'

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const rootReducer = combineReducers({
//   counter: counterPersistedReducer,
//   users: usersReducer,
//   users2: usersReducer,
//   users3: usersReducer,
// })

// const persistConfig = {
//   key: 'root',
//   storage,
//   // blacklist: ['counter'],
//   whitelist: ['counter', 'users'],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
// })

// export const persistor = persistStore(store)
