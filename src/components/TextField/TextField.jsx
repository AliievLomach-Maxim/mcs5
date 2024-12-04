import { forwardRef } from 'react'

const TextField = forwardRef((props, ref) => {
  return <input type='text' ref={ref} />
})

TextField.displayName = 'TextField'

export default TextField
