import { useDispatch, useSelector } from 'react-redux'

import { decrementCounter, incrementCounter } from './redux/counterSlice'
import { createUser } from './redux/usersSlice'

const App = () => {
  const counter = useSelector((state) => state.counter.value)
  const users = useSelector((state) => state.users.data)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(incrementCounter(1000))
  }

  const handleClick3 = () => {
    dispatch(incrementCounter(10))
  }

  const handleClick2 = () => {
    dispatch(decrementCounter(100))
  }

  const create = () => {
    // validate
    dispatch(
      createUser({
        name: 'Alex',
        age: 123,
      })
    )
  }
  return (
    <div>
      <button onClick={handleClick}>increment 1000</button>
      <button onClick={handleClick3}>increment 10</button>
      <br />
      counter:{counter}
      <br />
      <button onClick={handleClick2}>decrement 100</button>
      <br />
      {/* form */}
      <button onClick={create}>createUser </button>
      <br />
      {users.map((el) => (
        <p key={el.name}>{el.name}</p>
      ))}
    </div>
  )
}

export default App
