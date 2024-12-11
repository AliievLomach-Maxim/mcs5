import { Route, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage/HomePage'
// import AboutPage from './pages/AboutPage/AboutPage'
// import ArticlesPage from './pages/ArticlesPage/ArticlesPage'
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

// import Navigation from './components/Navigation/Navigation'
// import ArticlesDetails from './pages/ArticlesDetails/ArticlesDetails'
import { lazy, Suspense } from 'react'
// import Some from './components/Some/Some'

const Some = lazy(() => import('./components/Some/Some'))
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ArticlesPage = lazy(() => import('./pages/ArticlesPage/ArticlesPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))
const Navigation = lazy(() => import('./components/Navigation/Navigation'))
const ArticlesDetails = lazy(() => import('./pages/ArticlesDetails/ArticlesDetails'))

const App = () => {
  //
  return (
    <div>
      {/* <h1>Header</h1> */}
      <Navigation />
      <Suspense fallback={<h1>LOADING!!!!!!!!!!!!!!!!!!</h1>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/articles' element={<ArticlesPage />} />
          <Route path='/articles/:articleId' element={<ArticlesDetails />}>
            <Route path='somePath' element={<Some />} />
            <Route path='somePath2' element={<Some />} />
            <Route path='somePath3' element={<Some />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <footer>footer</footer>
    </div>
  )
}

export default App
// http://localhost:5173/
// http://localhost:5173/about
