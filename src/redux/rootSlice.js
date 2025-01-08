import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        (action) => {
          return action.type.endsWith('/fulfilled')
        },
        (state) => {
          console.log('addMatcher fulfilled')
          state.loading = false
        }
      )
      .addMatcher(
        (action) => {
          return action.type.endsWith('/pending')
        },
        (state) => {
          console.log('addMatcher')
          state.loading = true
          state.error = false
        }
      )
      .addMatcher(
        (action) => {
          return action.type.endsWith('/rejected')
        },
        (state) => {
          console.log('addMatcher rejected')
          state.error = true
          state.loading = false
        }
      ),
})

export const selectRootLoading = (state) => state.root.loading
export const selectRootError = (state) => state.root.error

export const rootReducer = rootSlice.reducer
