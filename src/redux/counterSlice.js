import { createSlice } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    value1: 0,
    value2: 0,
  },
  reducers: {
    incrementCounter_old: (state, action) => {
      return {
        ...state,
        value: state.value + action.payload,
      }
    },
    incrementCounter: (state, action) => {
      state.value += action.payload
    },
    decrementCounter_old: (state, action) => {
      return {
        ...state,
        value: state.value - action.payload,
      }
    },
    decrementCounter: (state, action) => {
      state.value -= action.payload
    },
  },
})
export const { incrementCounter, decrementCounter } = counterSlice.actions
const counterReducer = counterSlice.reducer

const persistConfig = {
  key: 'counter',
  storage,
  blacklist: ['value2'],
}
export const counterPersistedReducer = persistReducer(persistConfig, counterReducer)

// const counterInitialState = {
//   value: 0,
//   value1: 0,
//   value2: 0,
// }

// export const decrementCounterValue = createAction('counter/value/decrement')
// export const incrementCounterValue = createAction('counter/value/increment')

// export const counterReducer = (state = counterInitialState, action) => {
//   switch (action.type) {
//     case incrementCounterValue.type:
//       return {
//         ...state,
//         value: state.value + action.payload,
//       }
//     case decrementCounterValue.type:
//       return {
//         ...state,
//         value: state.value - action.payload,
//       }

//     default:
//       return state
//   }
// }
