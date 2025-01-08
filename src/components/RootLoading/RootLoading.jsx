import { useSelector } from 'react-redux'
import { selectRootLoading } from '../../redux/rootSlice'

const RootLoading = () => {
  const loading = useSelector(selectRootLoading)
  return loading && <h1>loading...</h1>
}

export default RootLoading
