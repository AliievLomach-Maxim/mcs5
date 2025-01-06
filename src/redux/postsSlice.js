import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts, removePost } from './oprations'

const postSlice = createSlice({
  name: 'slice',
  initialState: {
    posts: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.posts = payload
        state.loading = false
      })
      .addCase(fetchPosts.rejected, (state, { error }) => {
        state.error = true
        state.loading = false
        console.log('error', error.message)
      })
      .addCase(removePost.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(removePost.fulfilled, (state, { payload }) => {
        state.posts = state.posts.filter((el) => el.id !== payload.id)
        state.loading = false
      })
      .addCase(removePost.rejected, (state) => {
        state.error = true
        state.loading = false
      })
  },
})

export const postReducer = postSlice.reducer
