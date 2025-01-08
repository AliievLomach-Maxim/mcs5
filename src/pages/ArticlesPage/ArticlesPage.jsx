import ArticleList from '../../components/ArticleList/ArticleList'
import { useDispatch, useSelector } from 'react-redux'
import { selectArticles } from '../../redux/articlesSlice'
import { fetchArticles } from '../../redux/articlesOprations'
import { useEffect } from 'react'

const ArticlesPage = () => {
  const articles = useSelector(selectArticles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  const getAgain = () => {
    dispatch(fetchArticles())
  }

  return (
    <div>
      <h1>ArticlesPage</h1>
      <button onClick={getAgain}>getAgain</button>
      <br />
      {articles && <ArticleList hits={articles} />}
    </div>
  )
}

export default ArticlesPage
