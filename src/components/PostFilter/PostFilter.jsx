import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/filterSlice'

const PostFilter = () => {
  const value = useSelector((state) => state.filter.text)
  const dispatch = useDispatch()

  const handleChange = ({ target: { value } }) => {
    dispatch(changeFilter(value))
  }
  return <input type='text' placeholder='search by title' value={value} onChange={handleChange} />
}

export default PostFilter
