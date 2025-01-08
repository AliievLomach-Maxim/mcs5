import { Route, Routes } from 'react-router-dom'
import PostsPage from './pages/PostsPage/PostsPage'
import ArticlesPage from './pages/ArticlesPage/ArticlesPage'
import RootLoading from './components/RootLoading/RootLoading'
import { Toaster } from 'react-hot-toast'
import Layout from './Layout/Layout'
import LayoutSidebar from './Layout/LayoutSidebar'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PostsPage />} />
          <Route path='/articles' element={<ArticlesPage />} />
        </Route>
        <Route path='/profile' element={<LayoutSidebar />}>
          <Route index element={<PostsPage />} />
        </Route>

        <Route path='*' element={<p>404</p>} />
      </Routes>

      <RootLoading />
      <Toaster />
    </div>
  )
}

export default App
// import { Toaster } from 'react-hot-toast'
// import PostsPage from './pages/PostsPage/PostsPage'
// import ArticlesPage from './pages/ArticlesPage/ArticlesPage'
// import RootLoading from './components/RootLoading/RootLoading'

// const App = () => {
//   return (
//     <div>
//       <RootLoading />
//       <PostsPage />
//       <Toaster />
//       <hr />
//       <hr />
//       <ArticlesPage />
//     </div>
//   )
// }

// export default App
