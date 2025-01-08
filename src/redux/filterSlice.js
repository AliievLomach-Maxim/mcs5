import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    text: '',
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.text = payload
    },
  },
})

export const selectFilterText = (state) => state.filter.text

export const filterReducer = filterSlice.reducer

export const { changeFilter } = filterSlice.actions
