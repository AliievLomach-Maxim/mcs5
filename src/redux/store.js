import { configureStore } from '@reduxjs/toolkit'
import { postReducer } from './postsSlice'
import { filterReducer } from './filterSlice'
import { articlesReducer } from './articlesSlice'
import { rootReducer } from './rootSlice'

export const store = configureStore({
  reducer: {
    posts: postReducer,
    filter: filterReducer,
    articles: articlesReducer,
    root: rootReducer,
  },
})
