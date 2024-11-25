import { useState } from 'react'

const FieldSelect = () => {
	const [selectValue, setSelectValue] = useState('ua')

	const handleSelect = ({ target: { value } }) => {
		console.log('value', value)
		setSelectValue(value)
	}
	return (
		<select onChange={handleSelect} value={selectValue}>
			<option value='en'>En</option>
			<option value='ua'>Ua</option>
		</select>
	)
}

export default FieldSelect
