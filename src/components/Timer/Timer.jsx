import { useEffect, useRef } from 'react'

const Timer = () => {
  const id = useRef()

  useEffect(() => {
    id.current = setInterval(() => {
      console.log(Date.now())
    }, 1000)
    return () => {
      clearInterval(id.current)
    }
  }, [])

  const stop = () => {
    clearInterval(id.current)
  }

  return (
    <div>
      Timer
      <br />
      <button onClick={stop}>Stop interval</button>
    </div>
  )
}

export default Timer
