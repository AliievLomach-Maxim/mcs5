import { createSlice } from '@reduxjs/toolkit'
import { fetchArticles } from './articlesOprations'

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
  },
  extraReducers: (builder) =>
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.articles = payload
    }),
})

export const selectArticles = (state) => state.articles.articles

export const articlesReducer = articlesSlice.reducer
// import { createSlice } from '@reduxjs/toolkit'
// import { fetchArticles } from './articlesOprations'

// const articlesSlice = createSlice({
//   name: 'articles',
//   initialState: {
//     articles: [],
//     // loading: false,
//     // error: false,
//   },
//   extraReducers: (builder) =>
//     builder
//       //   .addCase(fetchArticles.pending, (state) => {
//       //     state.loading = true
//       //     state.error = false
//       //   })
//       .addCase(fetchArticles.fulfilled, (state, { payload }) => {
//         state.loading = false
//         state.articles = payload
//       }),
//   //   .addCase(fetchArticles.rejected, (state) => {
//   //     state.loading = false
//   //     state.error = true
//   //   })
//   //   .addMatcher(
//   //     (action) => action.type.endsWith('/pending'),
//   //     (state) => {
//   //       state.loading = true
//   //       state.error = false
//   //     }
//   //   )
//   //   .addMatcher(
//   //     (action) => action.type.endsWith('/rejected'),
//   //     (state) => {
//   //       state.error = true
//   //       state.loading = false
//   //     }
//   //   ),
// })

// export const selectArticles = (state) => state.articles.articles
// // export const selectArticlesLoading = (state) => state.articles.loading
// // export const selectArticlesError = (state) => state.articles.error

// export const articlesReducer = articlesSlice.reducer
