import { configureStore, createAction } from '@reduxjs/toolkit'

// export const incrementCounterValue = (data) => ({
//     type: 'counter/value/increment',
//     payload: data,
// })

// export const decrementCounterValue = (data) => ({
//   type: 'counter/value/decrement',
//   payload: data,
// })

export const decrementCounterValue = createAction('counter/value/decrement')
export const incrementCounterValue = createAction('counter/value/increment')

// if(test === 'test')

const initialState = {
  counter: {
    value: 0,
    value1: 0,
    value2: 0,
  },
  users: {
    data: [],
    extraData: [],
  },
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementCounterValue.type:
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + action.payload,
        },
      }
    case decrementCounterValue.type:
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - action.payload,
        },
      }

    default:
      return state
  }
}

export const store = configureStore({
  reducer: rootReducer,
})
