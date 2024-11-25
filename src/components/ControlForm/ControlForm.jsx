import { useId, useState } from 'react'

const ControlForm = ({ toSubmit }) => {
	const firstNameId = useId()
	const lastNameId = useId()

	const [formValue, setFormValue] = useState({
		firstName: '',
		lastName: '',
	})

	const handleChange = ({ target: { value, name } }) => {
		// validate
		setFormValue({
			...formValue,
			[name]: value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		toSubmit(formValue)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor={firstNameId}>firstNameId</label>
			<input
				type='text'
				id={firstNameId}
				value={formValue.firstName}
				onChange={handleChange}
				name='firstName'
			/>
			<br />
			<label htmlFor={lastNameId}>lastNameId</label>
			<input
				type='text'
				id={lastNameId}
				value={formValue.lastName}
				onChange={handleChange}
				name='lastName'
			/>
			<br />
			<button type='submit'>click</button>
		</form>
	)
}

export default ControlForm
