import { useDispatch, useSelector } from 'react-redux'
import { decrementCounterValue, incrementCounterValue } from './redux/store'

const App = () => {
  const counter = useSelector((state) => {
    console.log('state', state)
    return state.counter.value
  })
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(incrementCounterValue(1000))
  }

  const handleClick3 = () => {
    dispatch(incrementCounterValue(10))
  }

  const handleClick2 = () => {
    dispatch(decrementCounterValue(100))
  }

  return (
    <div>
      <button onClick={handleClick}>increment 1000</button>
      <button onClick={handleClick3}>increment 10</button>
      <br />
      counter:{counter}
      <br />
      <button onClick={handleClick2}>decrement 100</button>
    </div>
  )
}

export default App
