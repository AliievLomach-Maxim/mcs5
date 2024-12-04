import { useToggleContext } from '../../context/ToggleProvider'

const Comp2 = () => {
  const { isShowText } = useToggleContext()
  return <div>{isShowText && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>}</div>
}

export default Comp2
