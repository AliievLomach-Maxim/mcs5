import { useState } from 'react'

const Field = ({ change }) => {
	const [inputValue, setInputValue] = useState('')

	const handleChange = ({ target: { value } }) => {
		if (value.includes('@')) return
		setInputValue(value)
		change(value)
	}
	return (
		<>
			<input type='text' onChange={handleChange} value={inputValue} />
		</>
	)
}

export default Field
