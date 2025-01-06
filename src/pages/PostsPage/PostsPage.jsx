import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, removePost } from '../../redux/oprations'
import toast from 'react-hot-toast'

const PostsPage = () => {
  const { error, loading, posts } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const handleRemove = async (id) => {
    try {
      await dispatch(removePost(id)).unwrap()
      toast.success('removed successfully!')
    } catch (e) {
      console.error(e)
      toast.error('some error...')
    }
  }
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Oops, some error</h1>}
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            {post.title}
            <button onClick={() => handleRemove(post.id)}>remove</button>
          </div>
        ))}
    </div>
  )
}

export default PostsPage
