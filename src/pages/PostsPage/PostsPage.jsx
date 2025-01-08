import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, removePost } from '../../redux/postOprations'
import toast from 'react-hot-toast'
import PostFilter from '../../components/PostFilter/PostFilter'
import { selectFilteredPosts } from '../../redux/postsSlice'

const PostsPage = () => {
  const dispatch = useDispatch()

  const [counter, setCounter] = useState(0)

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

  const filteredPost = useSelector(selectFilteredPosts)

  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
      {filteredPost && (
        <>
          <PostFilter />
          <br />
          <br />
          <br />
          {filteredPost.map((post) => (
            <div key={post.id}>
              {post.title}
              <button onClick={() => handleRemove(post.id)}>remove</button>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default PostsPage
