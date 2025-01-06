import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const removePost = createAsyncThunk('posts/remove', async (id) => {
  const { data } = await axios.delete(`https://64689aefe99f0ba0a8286f54.mockapi.io/posts/${id}`)
  return data
})

export const fetchPosts = createAsyncThunk('posts/get', async () => {
  const { data } = await axios('https://64689aefe99f0ba0a8286f54.mockapi.io/posts')
  return data
})
// export const fetchPosts = createAsyncThunk('posts/get', async (_, thunkAPI) => {
//   try {
//     const { data } = await axios('https://64689aefe99f0ba0a8286f54.mockapi.io/postssss')
//     return data
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error)
//   }
// })
