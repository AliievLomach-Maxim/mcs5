import { useEffect, useState } from 'react'
import { getArticles } from '../../api/articles'
import ArticleList from '../../components/ArticleList/ArticleList'

const ArticlesPage = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await getArticles()
        setArticles(res.hits)
      } catch (error) {
        console.error(error)
      }
    }
    fetching()
  }, [])

  return (
    <div>
      <h1>ArticlesPage</h1>
      {articles && <ArticleList hits={articles} />}
    </div>
  )
}

export default ArticlesPage
