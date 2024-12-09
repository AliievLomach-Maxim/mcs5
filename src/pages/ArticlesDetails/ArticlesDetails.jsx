import { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { getSingleArticle } from '../../api/articles'

const ArticlesDetails = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await getSingleArticle(articleId)
        setArticle(res)
      } catch (error) {
        console.error(error)
      }
    }
    articleId && fetching()
  }, [articleId])

  return (
    article && (
      <div>
        <h2>{article.title}</h2>
        <p>url: {article.url}</p>
        <p>author: {article.author}</p>
        <hr />
        <Link to='somePath'>To some path</Link>
        <br />
        <Link to='somePath2'>To some path 2</Link>
        <br />
        <Link to='somePath3'>To some path 3</Link>
        <br />
        <Link to={`/articles/${articleId}`}>Up</Link>
        <hr />
        <Outlet />
      </div>
    )
  )
}

export default ArticlesDetails
