import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  extraData: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser_old: (state, { payload }) => {
      return {
        ...state,
        data: [...state.data, payload],
      }
    },
    createUser: (state, { payload }) => {
      state.data.push(payload)
    },
  },
})

export const usersReducer = usersSlice.reducer
export const { createUser } = usersSlice.actions

// const usersInitialState = {
//   data: [],
//   extraData: [],
// }

// export const createUserData = createAction('users/data/create')

// export const usersReducer = (state = usersInitialState, action) => {
//   switch (action.type) {
//     case createUserData.type:
//       return {
//         ...state,
//         data: [...state.data, action.payload],
//       }

//     default:
//       return state
//   }
// }
