import { Link } from 'react-router-dom'

const Article = ({ article }) => {
  return (
    <li>
      <Link to={`/articles/${article.objectID}`}>{article.title || article.story_title}</Link>
    </li>
  )
}

export default Article
