import { Link, useLocation } from 'react-router-dom'

const Article = ({ article }) => {
  const location = useLocation()

  return (
    <li>
      <Link to={`/articles/${article.objectID}`} state={location}>
        {article.title || article.story_title}
      </Link>
      <br />
      <p>author: {article.author}</p>
    </li>
  )
}

export default Article
