import { createSelector, createSlice } from '@reduxjs/toolkit'
import { fetchPosts, removePost } from './postOprations'
import { selectFilterText } from './filterSlice'

const postSlice = createSlice({
  name: 'slice',
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.posts = payload
      })
      .addCase(removePost.fulfilled, (state, { payload }) => {
        state.posts = state.posts.filter((el) => el.id !== payload.id)
      })
  },
})

export const selectPosts = (state) => state.posts.posts

export const selectFilteredPosts = createSelector(
  [selectPosts, selectFilterText],
  (posts, textFilter) => {
    console.log('selectFilteredPosts')
    return posts?.filter((el) => el.title.toLowerCase().includes(textFilter.toLowerCase()))
  }
)

export const postReducer = postSlice.reducer
// import { createSelector, createSlice } from '@reduxjs/toolkit'
// import { fetchPosts, removePost } from './postOprations'
// import { selectFilterText } from './filterSlice'

// const postSlice = createSlice({
//   name: 'slice',
//   initialState: {
//     posts: [],
//     // loading: false,
//     // error: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // .addCase(fetchPosts.pending, (state) => {
//       //   state.loading = true
//       //   state.error = false
//       // })
//       .addCase(fetchPosts.fulfilled, (state, { payload }) => {
//         state.posts = payload
//         // state.loading = false
//       })
//       // .addCase(fetchPosts.rejected, (state, { error }) => {
//       //   state.error = true
//       //   state.loading = false
//       //   console.log('error', error.message)
//       // })
//       // .addCase(removePost.pending, (state) => {
//       //   state.loading = true
//       //   state.error = false
//       // })
//       .addCase(removePost.fulfilled, (state, { payload }) => {
//         state.posts = state.posts.filter((el) => el.id !== payload.id)
//         // state.loading = false
//       })
//     // .addCase(removePost.rejected, (state) => {
//     //   state.error = true
//     //   state.loading = false
//     // })
//     // .addMatcher(
//     //   (action) => {
//     //     return action.type.endsWith('/fulfilled')
//     //   },
//     //   (state) => {
//     //     console.log('addMatcher fulfilled')
//     //     state.loading = false
//     //   }
//     // )
//     // .addMatcher(
//     //   (action) => {
//     //     return action.type.endsWith('/pending')
//     //   },
//     //   (state) => {
//     //     console.log('addMatcher')
//     //     state.loading = true
//     //     state.error = false
//     //   }
//     // )
//     // .addMatcher(
//     //   (action) => {
//     //     return action.type.endsWith('/rejected')
//     //   },
//     //   (state) => {
//     //     console.log('addMatcher rejected')
//     //     state.error = true
//     //     state.loading = false
//     //   }
//     // )
//   },
// })

// export const selectPosts = (state) => state.posts.posts

// // export const selectPostsLoading = (state) => state.posts.loading

// // export const selectPostsError = (state) => state.posts.error

// export const selectFilteredPosts = createSelector(
//   [selectPosts, selectFilterText],
//   (posts, textFilter) => {
//     console.log('selectFilteredPosts')
//     return posts?.filter((el) => el.title.toLowerCase().includes(textFilter.toLowerCase()))
//   }
// )

// // export const selectFilteredPosts = (state) => {
// //   console.log('selectFilteredPosts')
// //   const posts = selectPosts(state)
// //   const textFilter = selectFilterText(state)
// //   return posts?.filter((el) => el.title.toLowerCase().includes(textFilter.toLowerCase()))
// // }

// export const postReducer = postSlice.reducer
