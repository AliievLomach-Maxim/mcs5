import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const removeArticles = createAsyncThunk('remove/articles', async (id) => {
  const { data } = await axios.delete(`https://64689aefe99f0ba0a8286f54.mockapi.io/articles/${id}`)
  return data
})

export const fetchArticles = createAsyncThunk('get/articles', async () => {
  const { data } = await axios('https://64689aefe99f0ba0a8286f54.mockapi.io/articles')
  return data
})
