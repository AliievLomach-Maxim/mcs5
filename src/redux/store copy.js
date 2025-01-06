import { createStore } from 'redux'

const COUNTER_VALUE_INCREMENT = 'COUNTER_VALUE_INCREMENT'

export const incrementCounterValue = (data) => ({
  type: COUNTER_VALUE_INCREMENT,
  payload: data,
})

export const decrementCounterValue = (data) => ({
  type: 'counter/value/decrement',
  payload: data,
})

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

const rootReducer = (state, action) => {
  switch (action.type) {
    case COUNTER_VALUE_INCREMENT:
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + action.payload,
        },
      }
    case 'counter/value/decrement':
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

export const store = createStore(rootReducer, initialState)
