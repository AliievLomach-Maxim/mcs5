import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ArticlesPage from './pages/ArticlesPage/ArticlesPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import Navigation from './components/Navigation/Navigation'
import ArticlesDetails from './pages/ArticlesDetails/ArticlesDetails'
const App = () => {
  //
  return (
    <div>
      <h1>Header</h1>
      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/articles/:articleId' element={<ArticlesDetails />}>
          <Route path='somePath' element={<h2>Some Path</h2>} />
          <Route path='somePath2' element={<h2>Some Path 2</h2>} />
          <Route path='somePath3' element={<h2>Some Path 3</h2>} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <footer>footer</footer>
    </div>
  )
}

export default App
// http://localhost:5173/
// http://localhost:5173/about
