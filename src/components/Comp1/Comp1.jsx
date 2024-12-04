import { useToggleContext } from '../../context/ToggleProvider'

const Comp1 = () => {
  const { toggleShowText } = useToggleContext()

  const handleClick = () => {
    toggleShowText()
  }
  return (
    <div>
      <button onClick={handleClick}>CLick</button>
    </div>
  )
}

export default Comp1
