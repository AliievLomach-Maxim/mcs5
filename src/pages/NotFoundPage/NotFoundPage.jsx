import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <h1>Oops! Not found!</h1>
      <Link to='/'>Back to home</Link>
    </div>
  )
}

export default NotFoundPage
