import { Suspense, useEffect, useRef, useState } from 'react'
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from 'react-router-dom'
import { getSingleArticle } from '../../api/articles'

const ArticlesDetails = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState(null)

  const location = useLocation()

  const backLink = useRef(location.state)

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

  const navigate = useNavigate()
  const handleCLick = () => {
    navigate(backLink.current ?? '/articles')
  }

  return (
    article && (
      <div>
        <hr />
        <hr />
        {/* <Link to={backLink.current ?? '/articles'}>Back</Link> */}
        <button onClick={handleCLick}>back</button>
        {/* <Navigate></Navigate> */}
        <br />
        <h2>{article.title}</h2>
        <p>url: {article.url}</p>
        <p>author: {article.author}</p>
        <hr />
        {/* <Link to='somePath' state={location.state}> */}
        <Link to='somePath'>To some path</Link>
        <br />
        <Link to='somePath2'>To some path 2</Link>
        <br />
        <Link to='somePath3'>To some path 3</Link>
        <br />
        <Link to={`/articles/${articleId}`}>Up</Link>
        <hr />
        <Suspense fallback={<h1>LOADING Outlet!!!!!!!!!!!!!!!!!!</h1>}>
          <Outlet />
        </Suspense>
      </div>
    )
  )
}

export default ArticlesDetails
